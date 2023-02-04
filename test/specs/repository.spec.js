import { expect } from "chai";
import { faker } from "@faker-js/faker";
const repositoryName = faker.word.noun(9);
const newRepositoryName = faker.word.noun(10);

describe("Repository only", async () => {
  before(async () => {
    await browser.maximizeWindow();
    await browser.url("https://github.com");
    await $('//a[@href="/login"]').click();
    await $('input[id="login_field"]').setValue("evgeni.samoilenka@gmail.com");
    await $('input[id="password"]').setValue("pkjqhjr3816");
    await $('input[value = "Sign in"]').click();
    await $(
      '//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]'
    ).click();
    await $('input[id="repository_name"]').setValue(repositoryName);
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
    // const delRepositoryName = await $(
    //   '//div[@class="Box-body overflow-auto"]/p[contains(text(),"Please type")]/strong[contains(text(),"iDeception")]'
    // ).getText();
    await $('//summary[contains(text(),"Delete this repository")]').click();
    await $(
      '//details-dialog[@aria-label="Delete repository"]'
    ).waitForDisplayed({ timeout: 3000 });
    const getUser = await $('//a[@class="url fn"]').getText();
    const getAttr = await $("//dd/input[@type]").getAttribute("value");
    await $(
      '//input[@aria-label="Type in the name of the repository to confirm that you want to delete this repository."]'
    ).setValue(getUser + "/" + getAttr);
    await $(
      '//button[@class="btn-danger btn btn-block"][not(@disabled)]'
    ).click();
    const actualMessage = await $('//div[@role="alert"]').getText();
    expect(actualMessage)
      .to.include(getUser)
      .and.to.include(getAttr)
      .and.to.include("was successfully deleted.");
  });
});
