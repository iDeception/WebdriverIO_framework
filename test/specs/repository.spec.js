import { expect } from "chai";
import { faker } from "@faker-js/faker";
const randomWord = faker.word.noun(7);

describe("Repository", async () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("https://github.com/login");
    await $('input[id="login_field"]').setValue("evgeni.samoilenka@gmail.com");
    await $('input[id="password"]').setValue("pkjqhjr3816");
    await $('input[value = "Sign in"]').click();
  });

  it("Should be created a new repository", async () => {
    await $(
      '//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]'
    ).click();
    await $('input[id="repository_name"]').setValue(randomWord);
    await $('input[id="repository_description"]').setValue(
      "This is test repository!"
    );
    await $('input[id="repository_auto_init"]').click();
    await browser.pause(3000);
    await $('//button[contains(text(),"Create repository")]').click();
  });
});
