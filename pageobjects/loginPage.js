const selectors = {
  loginButton: '//a[@href="/login"]',
  emailField: 'input[id="login_field"]',
  passwordField: 'input[id="password"]',
  signinButton: 'input[value = "Sign in"]',
};

async function login() {
  await browser.maximizeWindow();
  await browser.url("https://github.com");
  await $(selectors.loginButton).click();
  await $(selectors.emailField).setValue(creds.LOGIN);
  await $(selectors.passwordField).setValue(creds.PASSWORD);
  await $(selectors.signinButton).click();
}

const loginPage = { login };
export default loginPage;
