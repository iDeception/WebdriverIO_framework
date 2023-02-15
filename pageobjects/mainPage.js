const selectors = {
  DROPDOWN_MENU: '//summary[@aria-label="View profile and more"]',
  USERNAME_FROM_DROPDOWN_MENU: '//strong[@class="css-truncate-target"]',
  NEW_REPOSITORY_BUTTON: '//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]',
};
async function openDropdownMenu() {
  await $(selectors.DROPDOWN_MENU).click();
}

async function getActualUserName() {
  return $(selectors.USERNAME_FROM_DROPDOWN_MENU).getText();
}

async function createNewRepository() {
  await $(selectors.NEW_REPOSITORY_BUTTON).click();
}

const mainPage = { openDropdownMenu, getActualUserName, createNewRepository };
export default mainPage;

//await $('//button[contains(text(),"Sign out")]').click();
