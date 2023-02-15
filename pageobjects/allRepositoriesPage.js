import { cookString } from "../utils/cookString.js";

const selectors = {
  LIST_OF_ALL_REPOSITORIES: '//*[@id="user-repositories-list"]//a[@itemprop = "name codeRepository"]',
  DELETION_CONFIRMATION_MESSAGE: '//div[@role="alert"]',
};

async function getRepositoriesList() {
  const allRepositories = await $$(selectors.LIST_OF_ALL_REPOSITORIES);
  const text = await Promise.all(allRepositories);
  return text.map((x) => x.getText());
}

async function getDeletionConfirmationMessage() {
  const message = await $(selectors.DELETION_CONFIRMATION_MESSAGE).getText();
  return cookString(message);
}

const allRepositoriesPage = { getRepositoriesList, getDeletionConfirmationMessage };

export default allRepositoriesPage;
