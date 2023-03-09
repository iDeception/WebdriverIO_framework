import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  REPOSITORY_NAME: "#repository_name",
  REPOSITORY_DESCRIPTION: "#repository_description",
  REPOSITORY_README_CHECKBOX: "#repository_description",
  REPOSITORY_CREATE_BUTTON: '//button[contains(text(),"Create repository")]',
};

async function enterRepositoryName(name) {
  browserHelper(selectors.REPOSITORY_NAME).setValue(name);
}

async function enterRepositoryDescription(description) {
  browserHelper(selectors.REPOSITORY_DESCRIPTION).setValue(description);
}

async function clickReadmeCheckbox() {
  browserHelper(selectors.REPOSITORY_README_CHECKBOX).clickElement();
}

async function clickCreateRepository() {
  browserHelper(selectors.REPOSITORY_CREATE_BUTTON).clickElement();
}

const createRepositoryPage = {
  enterRepositoryName,
  enterRepositoryDescription,
  clickReadmeCheckbox,
  clickCreateRepository,
};

export default createRepositoryPage;
