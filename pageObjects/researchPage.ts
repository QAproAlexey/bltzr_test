import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class ResearchPage extends WebPage {
  readonly currentPagePagination: Locator;
  readonly expectIfGameNamePresent: Locator;


  constructor(page: Page) {
    super(page);
    this.currentPagePagination = page.locator('[class="current"]');
    this.expectIfGameNamePresent = page.locator('[class="post-detail__title"]');
  }

  async selectGameByName(text) {
    let chainFilterOption = this.page.locator(`(//a[contains(text(),"${text}")])`);
    await chainFilterOption.click();
  }

  async checkThaTheCheckBoxChecked() {
    await expect(this.checkBoxChecked).toBeVisible();
  }

  async selectNextOrPreviousButtonInPagination(text) {
    let selectPaginationOption = this.page.locator(`[aria-label="${text} Page"]`);
    await selectPaginationOption.click();
  }

  async selectNumberButtonInPagination(text) {
    let selectPaginationOption = this.page.locator(`[title="Page ${text}"]`);
    await selectPaginationOption.click();
  }
}
