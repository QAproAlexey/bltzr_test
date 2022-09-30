import { BrowserContext, Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';
import { timeouts } from "../helpers/timeouts";

export class MarketplacePage extends WebPage {
  readonly context: BrowserContext;
  readonly checkBoxChecked: Locator;
  readonly firstElementBuyButton: Locator;
  readonly clearAllFiltersButton: Locator;
  readonly listFiltered: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page);
    this.checkBoxChecked = page.locator('//span[@data-checked]');
    this.firstElementBuyButton = page.locator('(//button[@class="chakra-button css-gf2dhn"]) [1]');
    this.clearAllFiltersButton = page.locator('[class="chakra-text css-146q31f"]');
    this.listFiltered = page.locator('(//td[@class="css-12t8qlj"] [3])');
  }

  async selectFilterCheckBox(text) {
    await this.page.waitForTimeout(timeouts.shortTimeout);
    let checkBoxOption = this.page.locator(`(//p[text()="${text}"])`);
    await checkBoxOption.check();
  }

  async checkThatTheListFiltered(text: string) {
    const texts = await this.listFiltered.allTextContents();
    for (const name of texts) {
      await expect(name).toContain(text);
    }
  }

  async checkThatTheCheckBoxUnChecked() {
    await expect(this.checkBoxChecked).not.toBeVisible();
  }

  async clickingOnTheClearAllFiltersButton() {
    await this.clearAllFiltersButton.click();
  }

  async clickingOnTheBuyButton() {
    await this.firstElementBuyButton.click();
  }


  async expectIfClickingOnTheBuyButton(page) {
    await expect(page).toHaveURL(/.*103/);
  }

  async selectNftId(text) {
    let selectNftIdOption = this.page.locator(`[class="paginate_button ${text}"]`);
    await selectNftIdOption.click();
  }
}
