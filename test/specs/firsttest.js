import { expect } from "chai";
const loggedinUser = 'iDeception';
describe('Smoke Test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login');
        await $('input[id="login_field"]').setValue('evgeni.samoilenka@gmail.com');
        await $('input[id="password"]').setValue('pkjqhjr3816');
        await $('input[value = "Sign in"]').click();
    })
    it("Verify User", async () => {
        await $('//summary[@aria-label="View profile and more"]').click();
        const actualUsername = await $('//strong[@class="css-truncate-target"]').getText()
        expect(loggedinUser).to.equal(actualUsername)
    });
    it("Create a new repository", async () => {

    })
})