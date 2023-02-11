const selectors = {
  REPOSITORY_SETTINGS_TAB: '[id="settings-tab"]',
  REPOSITORY_RENAME_FIELD: '//input[@id="rename-field"]',
  REPOSITORY_RENAME_BUTTON: '//button[@type="submit" and contains(text(),"Rename")]',
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

const repositorySettingsPage = {
  clickSettingsTab,
  enterNewRepositoryName,
  clickRenameButton,
};

export default repositorySettingsPage;
