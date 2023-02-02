import { expect } from "chai";
import { faker } from '@faker-js/faker';
const loggedinUser = 'iDeception';
describe('Smoke Test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login');
        await $('input[id="login_field"]').setValue('evgeni.samoilenka@gmail.com');
        await $('input[id="password"]').setValue('pkjqhjr3816');
        await $('input[value = "Sign in"]').click();
    })

    // it("Verify User", async () => {
    //     await $('//summary[@aria-label="View profile and more"]').click();
    //     const actualUsername = await $('//strong[@class="css-truncate-target"]').getText()
    //     expect(loggedinUser).to.equal(actualUsername)
    // });

    it("Create a new repository", async () => {
        await $('//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]').click();
        const randomWord1 = faker.word.adjective(7);
        const randomWord2 = faker.word.noun(7);
        await $('input[id="repository_name"]').setValue(randomWord1 + '-' + randomWord2);
        await $('input[id="repository_description"]').setValue('This is test repository!');
        await $('input[id="repository_auto_init"]').click();
        await $('//button[contains(text(),"Create repository")]').click();
        await browser.pause(5000)
    })

    afterEach(async () => {
        await browser.closeWindow();
    })

})

