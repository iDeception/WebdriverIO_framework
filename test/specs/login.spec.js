import { expect } from "chai";
const loggedinUser = "iDeception";

describe("Login", async () => {
  before(async () => {
    await browser.maximizeWindow();
    await browser.url("https://github.com");
    await $('//a[@href="/login"]').click();
    await $('input[id="login_field"]').setValue("evgeni.samoilenka@gmail.com");
    await $('input[id="password"]').setValue("pkjqhjr3816");
    await $('input[value = "Sign in"]').click();
  });

  it("Shoud be correct user after login", async () => {
    await $('//summary[@aria-label="View profile and more"]').click();
    const actualUsername = await $(
      '//strong[@class="css-truncate-target"]'
    ).getText();
    expect(loggedinUser).to.equal(actualUsername);
    await $('//button[contains(text(),"Sign out")]').click();
  });
});
