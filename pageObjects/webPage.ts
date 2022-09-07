import { Locator, Page } from '@playwright/test';

export class WebPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async click(locator: Locator) {
    await locator.click();
  }

  async hover(locator: Locator) {
    await locator.hover();
  }

  async uncheckCheckboxIfSelected(locator: Locator) {
    const statusOfCheckbox = await locator.isChecked();

    if (statusOfCheckbox) {
      await locator.uncheck();
    }
  }

  async checkCheckboxIfNotSelected(locator: Locator) {
    const statusOfCheckbox = await locator.isChecked();

    if (!statusOfCheckbox) {
      await locator.check();
    }
  }
}
