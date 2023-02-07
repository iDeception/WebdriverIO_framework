const selectors = {
  repository_name: 'input[id="repository_name"]',
  repository_description: 'input[id="repository_description"]',
  readme_checkbox: 'input[id="repository_description"]',
};

async function enterRepositoryName() {
  await $(selectors.repository_name).setValue(repositoryName);
}
