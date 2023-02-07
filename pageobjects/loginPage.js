const selectors = {
  loginButton: '//a[@href="/login"]',
  emailField: 'input[id="login_field"]',
  passwordField: 'input[id="password"]',
  signinButton: 'input[value = "Sign in"]',
};

async function login(login, password) {
  await browser.maximizeWindow();
  await browser.url("https://github.com");
  await $(selectors.loginButton).click();
  await $(selectors.emailField).setValue(login);
  await $(selectors.passwordField).setValue(password);
  await $(selectors.signinButton).click();
}

const loginPage = { login };
export default loginPage;
