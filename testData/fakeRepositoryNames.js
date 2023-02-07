import { faker } from "@faker-js/faker";
const fakeRepositoryNames = {
  REPOSITORY_NAME: faker.word.noun(9),
  NEW_REPOSITORY_NAME: `${repositoryName}_renamed`,
};

export default fakeRepositoryNames;
