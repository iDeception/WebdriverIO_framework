import { expect } from "chai";
import loginPage from "../../pageobjects/loginPage.js";
import mainPage from "../../pageobjects/mainPage.js";
import creds from "../../testData/creds.js";
const loggedinUser = "iDeception";

describe("Login only", async () => {
  before(async () => {
    await loginPage.login(creds.LOGIN, creds.PASSWORD);
  });

  it("Shoud be correct user after login", async () => {
    await mainPage.openDropdownMenu();
    const actualUsername = await mainPage.getActualUserName();
    expect(loggedinUser).to.equal(actualUsername);
  });
});
