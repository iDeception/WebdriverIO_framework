import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  REPOSITORY_ACTUAL_NAME: '//strong[@itemprop="name"]/a[@href]',
};

async function getActualRepositoryName() {
  return browserHelper(selectors.REPOSITORY_ACTUAL_NAME).getElementText();
}

const repositoryPage = { getActualRepositoryName };

export default repositoryPage;
