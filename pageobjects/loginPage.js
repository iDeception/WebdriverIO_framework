const selectors = {
  LOGIN_BUTTON: '//a[@href="/login"]',
  EMAIL_FIELD: 'input[id="login_field"]',
  PASSWORD_FIELD: 'input[id="password"]',
  SIGNIN_BUTTON: 'input[value = "Sign in"]',
};

async function login(login, password) {
  await browser.maximizeWindow();
  await browser.url("https://github.com");
  await $(selectors.LOGIN_BUTTON).click();
  await $(selectors.EMAIL_FIELD).setValue(login);
  await $(selectors.PASSWORD_FIELD).setValue(password);
  await $(selectors.SIGNIN_BUTTON).click();
}

const loginPage = { login };
export default loginPage;
