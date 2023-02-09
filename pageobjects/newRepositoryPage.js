const selectors = {
  REPOSITORY_NAME: 'input[id="repository_name"]',
  //REPOSITORY_DESCRIPTION: 'input[id="repository_description"]',
  //README_CHECKBOX: 'input[id="repository_description"]',
};

async function enterRepositoryName(name) {
  await $(selectors.REPOSITORY_NAME).setValue(name);
}

const newRepositoryPage = { enterRepositoryName };
export default newRepositoryPage;
