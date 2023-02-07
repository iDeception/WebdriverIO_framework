import { expect } from "chai";
import loginPage from "../../pageobjects/loginPage";
import mainPage from "../../pageobjects/mainPage";
const loggedinUser = "iDeception";

describe("Login only", async () => {
  before(async () => {
    await loginPage.login();
  });

  it("Shoud be correct user after login", async () => {
    await mainPage.openDropdownMenu();
    const actualUsername = await mainPage.getActualUserName();
    expect(loggedinUser).to.equal(actualUsername);
  });
});
