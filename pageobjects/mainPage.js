import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  DROPDOWN_MENU: '//summary[@aria-label="View profile and more"]',
  USERNAME_FROM_DROPDOWN_MENU: '//strong[@class="css-truncate-target"]',
  NEW_REPOSITORY_BUTTON: '//div[@data-target="loading-context.details"]//a[@class="btn btn-sm btn-primary"]',
};
async function openDropdownMenu() {
  await browserHelper(selectors.DROPDOWN_MENU).clickElement();
  //await $(selectors.DROPDOWN_MENU).click();
}

async function getActualUserName() {
  return browserHelper(selectors.USERNAME_FROM_DROPDOWN_MENU).getElementText();
}

async function createNewRepository() {
  await browserHelper(selectors.NEW_REPOSITORY_BUTTON).clickElement();
  //await $(selectors.NEW_REPOSITORY_BUTTON).click();
}

const mainPage = { openDropdownMenu, getActualUserName, createNewRepository };
export default mainPage;

//await $('//button[contains(text(),"Sign out")]').click();
