import { browserHelper } from "../utils/browserHelper.js";
import { cookConfirmationText } from "../utils/cookConfirmationText.js";

const selectors = {
  REPOSITORY_SETTINGS_TAB: '[id="settings-tab"]',
  REPOSITORY_RENAME_FIELD: '//input[@id="rename-field"]',
  REPOSITORY_RENAME_BUTTON: '//button[@type="submit" and contains(text(),"Rename")]',
  DELETE_REPOSITORY_BUTTON: '//summary[contains(text(),"Delete this repository")]',
  DELETE_REPOSITORY_DIALOG: '//details-dialog[@aria-label="Delete repository"]',
  CURRENT_USER_NAME: '//a[@class="url fn"]',
  CURRENT_REPOSITORY_NAME: "//dd/input[@type]",
  DELETE_REPOSITORY_CONFIRMATION_FIELD: '//input[@aria-label="Type in the name of the repository to confirm that you want to delete this repository."]',
  CONFIRM_REPOSITORY_DELETION: '//button[@class="btn-danger btn btn-block"][not(@disabled)]',
};

async function clickSettingsTab() {
  await browserHelper(selectors.REPOSITORY_SETTINGS_TAB).clickElement();
}

async function enterNewRepositoryName(new_name) {
  await browserHelper(selectors.REPOSITORY_RENAME_FIELD).setValue(new_name);
}

async function clickRenameButton() {
  await browserHelper(selectors.REPOSITORY_RENAME_BUTTON).clickElement();
}

async function clickDeleteRepositoryButton() {
  await browserHelper(selectors.DELETE_REPOSITORY_BUTTON).clickElement();
}

async function getActualUserName() {
  return browserHelper(selectors.CURRENT_USER_NAME).getElementText();
}

async function getCurrentRepositoryName() {
  return browserHelper(selectors.CURRENT_REPOSITORY_NAME).getAttributeByName("value");
}

async function enterConfirmationText(user_name, repo_name) {
  const confirmationText = cookConfirmationText(user_name, repo_name);
  await browserHelper(selectors.DELETE_REPOSITORY_CONFIRMATION_FIELD).setValue(confirmationText);
}

async function confirmRepositoryDeletion() {
  await browserHelper(selectors.CONFIRM_REPOSITORY_DELETION).clickElement();
}

const repositorySettingsPage = {
  clickSettingsTab,
  enterNewRepositoryName,
  clickRenameButton,
  clickDeleteRepositoryButton,
  getCurrentRepositoryName,
  enterConfirmationText,
  confirmRepositoryDeletion,
  getActualUserName,
};

export default repositorySettingsPage;
