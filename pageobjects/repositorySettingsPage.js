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
  await $(selectors.REPOSITORY_SETTINGS_TAB).click();
}

async function enterNewRepositoryName(new_name) {
  await $(selectors.REPOSITORY_RENAME_FIELD).setValue(new_name);
}

async function clickRenameButton() {
  await $(selectors.REPOSITORY_RENAME_BUTTON).waitForEnabled({ timeout: 2000 });
  await $(selectors.REPOSITORY_RENAME_BUTTON).click();
}

async function clickDeleteRepositoryButton() {
  await $(selectors.DELETE_REPOSITORY_BUTTON).click();
  await $(selectors.DELETE_REPOSITORY_DIALOG).waitForDisplayed({ timeout: 2000 });
}

async function getActualUserName() {
  return await $(selectors.CURRENT_USER_NAME).getText();
}

async function getCurrentRepositoryName() {
  return await $(selectors.CURRENT_REPOSITORY_NAME).getAttribute("value");
}

async function enterConfirmationText(user_name, repo_name) {
  await $(selectors.DELETE_REPOSITORY_CONFIRMATION_FIELD).setValue(user_name, repo_name);
}

async function confirmRepositoryDeletion() {
  await $(selectors.CONFIRM_REPOSITORY_DELETION).click();
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
