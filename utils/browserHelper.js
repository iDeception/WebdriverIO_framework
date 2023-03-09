import { default_timeout } from "../config/settings.js";
import { logger } from "./logger.js";

export function browserHelper(selector, timeout = default_timeout) {
  async function findElement() {
    try {
      const isElementDisplayed = await $(selector).waitForDisplayed({ timeout });
      if (isElementDisplayed) {
        return $(selector);
      }
    } catch (error) {
      logger.error(`${selector} wasn't displayed in ${timeout} ms`);
      throw Error(error);
    }
  }

  async function findElements() {
    await $$(selector);
    return $$(selector);
  }

  async function clickElement() {
    try {
      const isElementEnabled = await $(selector).waitForEnabled({ timeout });
      if (isElementEnabled) {
        await $(selector).click();
        logger.debug(`${selector} was clicked`);
      }
    } catch (error) {
      logger.error(`${selector} was not enabled in ${timeout} ms`);
      throw Error(error);
    }
  }

  async function setValue(value) {
    const element = await findElement();
    try {
      await element.setValue(value);
      logger.debug(`${value} was set in ${selector}`);
    } catch (error) {
      logger.error(`${selector} is not interactable`);
      throw Error(error);
    }
  }

  async function getElementText() {
    const getElementWithText = await findElement();
    return getElementWithText.getText();
  }

  async function getAttributeByName(attribute_name) {
    const getElementWithAttribute = await findElement();
    let elementAttribute;
    if (getElementWithAttribute) {
      elementAttribute = await getElementWithAttribute.getAttribute(attribute_name);
      if (!elementAttribute) {
        logger.error(`Couldn't get attribute from element ${selector}`);
        throw new Error(`Couldn't get attribute from element ${selector}`);
      }
      return elementAttribute;
    }
  }

  return { findElement, findElements, clickElement, setValue, getElementText, getAttributeByName };
}
