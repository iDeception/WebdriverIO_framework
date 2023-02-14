const selectors = {
  LIST_OF_ALL_REPOSITORIES: '//*[@id="user-repositories-list"]//a[@itemprop = "name codeRepository"]',
  DELETION_CONFIRMATION_MESSAGE: '//div[@role="alert"]',
};

async function getRepositoriesList() {
  return await $(selectors.LIST_OF_ALL_REPOSITORIES).getText();
}

async function getDeletionConfirmationMessage() {
  return await $(selectors.DELETION_CONFIRMATION_MESSAGE).getText();
}

const allRepositoriesPage = { getRepositoriesList, getDeletionConfirmationMessage };

export default allRepositoriesPage;
