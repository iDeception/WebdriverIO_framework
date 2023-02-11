const selectors = {
  REPOSITORY_ACTUAL_NAME: '//strong[@itemprop="name"]/a[@href]',
};

async function getActualRepositoryName() {
  return await $(selectors.REPOSITORY_ACTUAL_NAME).getText();
}

const repositoryPage = { getActualRepositoryName };

export default repositoryPage;
