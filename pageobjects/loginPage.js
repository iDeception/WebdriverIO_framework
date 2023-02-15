import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  LOGIN_BUTTON: '//a[@href="/login"]',
  EMAIL_FIELD: 'input[id="login_field"]',
  PASSWORD_FIELD: 'input[id="password"]',
  SIGNIN_BUTTON: 'input[value = "Sign in"]',
};

async function login(login, password) {
  await browser.maximizeWindow();
  await browser.url("https://github.com");
  await browserHelper(selectors.LOGIN_BUTTON).clickElement();
  await browserHelper(selectors.EMAIL_FIELD).setValue(login);
  await browserHelper(selectors.PASSWORD_FIELD).setValue(password);
  await browserHelper(selectors.SIGNIN_BUTTON).clickElement();
}

const loginPage = { login };
export default loginPage;
