const selectors = {
  dropdown_menu: '//summary[@aria-label="View profile and more"]',
  username_from_dropdown_menu: '//strong[@class="css-truncate-target"]',
  new_repository_button:
    '//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]',
};
async function openDropdownMenu() {
  await $(selectors.dropdown_menu).click();
}

async function getActualUserName() {
  await $(selectors.username_from_dropdown_menu).getText();
}

async function createNewRepository() {
  await $(selectors.new_repository_button).click();
}
const mainPage = { openDropdownMenu, getActualUserName, createNewRepository };
export default mainPage;
//await $('//button[contains(text(),"Sign out")]').click();
