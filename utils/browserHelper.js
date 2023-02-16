import { default_timeout } from "../config/settings.js";

export function browserHelper(selector, timeout = default_timeout) {
  async function findElement() {
    await $(selector).waitForDisplayed({ timeout });
    return $(selector);
  }
  async function findElements() {
    return $$(selector);
  }
  async function clickElement() {
    await $(selector).waitForEnabled({ timeout });
    await $(selector).click();
  }
  async function setValue(value) {
    const element = await findElement();
    await element.setValue(value);
  }
  async function getElementText() {
    const element = await findElement();
    return element.getText();
  }

  return { findElement, findElements, clickElement, setValue, getElementText };
}
