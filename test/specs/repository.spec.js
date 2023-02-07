import { expect } from "chai";
import { faker } from "@faker-js/faker";
import mainPage from "../../pageobjects/mainPage.js";
import fakeRepositoryNames from "../../testData/fakeRepositoryNames.js";
const repositoryName = faker.word.noun(9);
const newRepositoryName = `${repositoryName}_renamed`;

describe("Repository", async () => {
  before(async () => {
    await loginPage.login();
    await mainPage.createNewRepository();
    await newRepositoryName.repositoryName().setValue(fakeRepositoryNames);
    await $('input[id="repository_description"]').setValue(
      "This is test repository!"
    );
    await $('input[id="repository_auto_init"]').click();
    await $('//button[contains(text(),"Create repository")]').waitForEnabled({
      timeout: 2000,
    });
    await $('//button[contains(text(),"Create repository")]').click();
  });

  it("Should verify if a repository was created", async () => {
    const actualRepositoryName = await $(
      '//strong[@itemprop="name"]/a[@href]'
    ).getText();
    expect(actualRepositoryName).to.equal(repositoryName);
  });

  it("Should rename repository and verify that it was renamed", async () => {
    await $('[id="settings-tab"]').click();
    await $('//input[@id="rename-field"]').setValue(newRepositoryName);
    await $(
      '//button[@type="submit" and contains(text(),"Rename")]'
    ).waitForEnabled({ timeout: 2000 });
    await $('//button[@type="submit" and contains(text(),"Rename")]').click();
    const actualRepositoryName = await $(
      '//strong[@itemprop="name"]/a[@href]'
    ).getText();
    expect(actualRepositoryName).to.equal(newRepositoryName);
  });

  it("Should delete repository and verify that it was deleted", async () => {
    await $('[id="settings-tab"]').click();
    await $('//summary[contains(text(),"Delete this repository")]').click();
    await $(
      '//details-dialog[@aria-label="Delete repository"]'
    ).waitForDisplayed();
    const getUserName = await $('//a[@class="url fn"]').getText();
    const getRepoName = await $("//dd/input[@type]").getAttribute("value");
    await $(
      '//input[@aria-label="Type in the name of the repository to confirm that you want to delete this repository."]'
    ).setValue(getUserName + "/" + getRepoName);
    await $(
      '//button[@class="btn-danger btn btn-block"][not(@disabled)]'
    ).click();

    const element = await $$(
      '//*[@id="user-repositories-list"]//a[@itemprop = "name codeRepository"]'
    );
    const text = element.map((x) => x.getText());
    const text2 = await Promise.all(text);
    expect(text2.indexOf(newRepositoryName) == -1).to.be.true;

    const actualMessage = await $('//div[@role="alert"]').getText();
    expect(actualMessage).to.equal(
      `Your repository "${getUserName}/${getRepoName}" was successfully deleted.`
    );
  });
});
