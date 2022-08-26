import { Locator, Page } from '@playwright/test';

export class WebPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hover(locator: Locator) {
    await this.page.waitForLoadState();
    await locator.hover();
  }

}
