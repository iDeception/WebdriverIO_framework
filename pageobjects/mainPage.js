const selectors = {
  dropdown_menu: '//summary[@aria-label="View profile and more"]',
  username_from_dropdown_menu: '//strong[@class="css-truncate-target"]',
};
async function openDropdownMenu() {
  await $(selectors.dropdown_menu).click();
}

async function getActualUserName() {
  await $(selectors.username_from_dropdown_menu).getText();
}

const mainPage = { openDropdownMenu, getActualUserName };
export default mainPage;
//await $('//button[contains(text(),"Sign out")]').click();
