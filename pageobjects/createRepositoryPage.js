import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  REPOSITORY_NAME: 'input[id="repository_name"]',
  REPOSITORY_DESCRIPTION: 'input[id="repository_description"]',
  REPOSITORY_README_CHECKBOX: 'input[id="repository_description"]',
  REPOSITORY_CREATE_BUTTON: '//button[contains(text(),"Create repository")]',
};

async function enterRepositoryName(name) {
  browserHelper(selectors.REPOSITORY_NAME).setValue(name);
  //await $(selectors.REPOSITORY_NAME).setValue(name);
}

async function enterRepositoryDescription(description) {
  browserHelper(selectors.REPOSITORY_DESCRIPTION).setValue(description);
  //await $(selectors.REPOSITORY_DESCRIPTION).setValue(description);
}

async function clickReadmeCheckbox() {
  browserHelper(selectors.REPOSITORY_README_CHECKBOX).clickElement();
  //await $(selectors.REPOSITORY_README_CHECKBOX).click();
}

async function clickCreateRepository() {
  browserHelper(selectors.REPOSITORY_CREATE_BUTTON).clickElement();
  // await $(selectors.REPOSITORY_CREATE_BUTTON).waitForEnabled({ timeout: 2000 });
  // await $(selectors.REPOSITORY_CREATE_BUTTON).click();
}

const createRepositoryPage = {
  enterRepositoryName,
  enterRepositoryDescription,
  clickReadmeCheckbox,
  clickCreateRepository,
};

export default createRepositoryPage;
