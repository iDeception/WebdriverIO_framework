import { expect } from "chai";
import loginPage from "../../pageobjects/loginPage.js";
import creds from "../../testData/creds.js";
import mainPage from "../../pageobjects/mainPage.js";
import createRepositoryPage from "../../pageobjects/createRepositoryPage.js";
import fakeNames from "../../testData/fakeRepositoryNames.js";
import { repositoryDecription } from "../../testData/repositoryDescription.js";
import repositorySettingsPage from "../../pageobjects/repositorySettingsPage.js";
import repositoryPage from "../../pageobjects/repositoryPage.js";
import allRepositoriesPage from "../../pageobjects/allRepositoriesPage.js";

describe("Repository", async () => {
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

  it("Should delete repository and verify that it was deleted", async () => {
    await repositorySettingsPage.clickSettingsTab();
    await repositorySettingsPage.clickDeleteRepositoryButton();
    const getUserName = await repositorySettingsPage.getActualUserName();
    const getRepoName = await repositorySettingsPage.getCurrentRepositoryName();
    await repositorySettingsPage.enterConfirmationText(getUserName + "/" + getRepoName);
    await repositorySettingsPage.confirmRepositoryDeletion();
    const repositories = await allRepositoriesPage.getRepositoriesList();
    expect(repositories.indexOf(fakeNames.NEW_REPOSITORY_NAME) == -1).to.be.true;
    const actualMessage = await allRepositoriesPage.getDeletionConfirmationMessage();
    expect(actualMessage).to.equal(`Yourrepository"${getUserName}/${getRepoName}"wassuccessfullydeleted.`);
  });
});
