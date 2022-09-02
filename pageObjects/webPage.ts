import { Locator, Page } from '@playwright/test';

export class WebPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async click(locator: Locator) {
    await this.page.waitForLoadState();
    await locator.click();
  }

  async hover(locator: Locator) {
    await this.page.waitForLoadState();
    await locator.hover();
  }

}
