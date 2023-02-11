import { expect } from "chai";
import loginPage from "../../pageobjects/loginPage.js";
import creds from "../../testData/creds.js";
import mainPage from "../../pageobjects/mainPage.js";
import createRepositoryPage from "../../pageobjects/createRepositoryPage.js";
import fakeNames from "../../testData/fakeRepositoryNames.js";
import { repositoryDecription } from "../../testData/repositoryDescription.js";
import repositorySettingsPage from "../../pageobjects/repositorySettingsPage.js";
import repositoryPage from "../../pageobjects/repositoryPage.js";

describe("Repository only", async () => {
  before(async () => {
    await loginPage.login(creds.LOGIN, creds.PASSWORD);
    await mainPage.createNewRepository();
    await createRepositoryPage.enterRepositoryName(fakeNames.REPOSITORY_NAME);
    await createRepositoryPage.enterRepositoryDescription(repositoryDecription);
    await createRepositoryPage.clickReadmeCheckbox();
    await createRepositoryPage.clickCreateRepository();
  });

  it("Should verify if a repository was created", async () => {
    const actualRepositoryName = await repositoryPage.getActualRepositoryName();
    expect(actualRepositoryName).to.equal(fakeNames.REPOSITORY_NAME);
    console.log("Original repository name was " + fakeNames.REPOSITORY_NAME);
    console.log("Actual repository name is " + actualRepositoryName);
  });

  it("Should rename repository and verify that it was renamed", async () => {
    await repositorySettingsPage.clickSettingsTab();
    await repositorySettingsPage.enterNewRepositoryName(fakeNames.NEW_REPOSITORY_NAME);
    await repositorySettingsPage.clickRenameButton();
    const actualRepositoryName = await repositoryPage.getActualRepositoryName();
    expect(actualRepositoryName).to.equal(fakeNames.NEW_REPOSITORY_NAME);
    console.log("Repository name was changed to " + fakeNames.NEW_REPOSITORY_NAME);
    console.log("Actual repository name is " + actualRepositoryName);
  });

  // it("Should delete repository and verify that it was deleted", async () => {
  //   await $('[id="settings-tab"]').click();
  //   await $('//summary[contains(text(),"Delete this repository")]').click();
  //   await $(
  //     '//details-dialog[@aria-label="Delete repository"]'
  //   ).waitForDisplayed();
  //   const getUserName = await $('//a[@class="url fn"]').getText();
  //   const getRepoName = await $("//dd/input[@type]").getAttribute("value");
  //   await $(
  //     '//input[@aria-label="Type in the name of the repository to confirm that you want to delete this repository."]'
  //   ).setValue(getUserName + "/" + getRepoName);
  //   await $(
  //     '//button[@class="btn-danger btn btn-block"][not(@disabled)]'
  //   ).click();

  //   const element = await $$(
  //     '//*[@id="user-repositories-list"]//a[@itemprop = "name codeRepository"]'
  //   );
  //   const text = element.map((x) => x.getText());
  //   const text2 = await Promise.all(text);
  //   expect(text2.indexOf(newRepositoryName) == -1).to.be.true;

  //   const actualMessage = await $('//div[@role="alert"]').getText();
  //   expect(actualMessage).to.equal(
  //     `Your repository "${getUserName}/${getRepoName}" was successfully deleted.`
  //   );
  // });
});
