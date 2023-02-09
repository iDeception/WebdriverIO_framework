import { faker } from "@faker-js/faker";
const fakeNames = {
  REPOSITORY_NAME: faker.word.noun(8),
  NEW_REPOSITORY_NAME: faker.word.noun(9),
};

export default fakeNames;
