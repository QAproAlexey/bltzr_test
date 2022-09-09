import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class MarketplacePage extends WebPage {
  readonly checkBoxChecked: Locator;
  readonly buyButton: Locator;
  readonly clearAllFiltersButton: Locator;

  constructor(page: Page) {
    super(page);
    this.checkBoxChecked = page.locator('//span[@data-checked]');
    this.buyButton = page.locator('(//button[@class="chakra-button css-gf2dhn"]) [1]');
    this.clearAllFiltersButton = page.locator('[class="chakra-text css-146q31f"]');
  }

  async selectFilterCheckBox(text) {
    await expect(this.buyButton).toBeVisible();
    let checkBoxOption = this.page.locator(`(//p[text()="${text}"])`);
    await checkBoxOption.check();
  }

  async checkThatTheFilterCheckBoxChecked(text: string) {
    const rows = this.page.locator('(//td[@class="css-12t8qlj"] [3])');
    const texts = await rows.allTextContents();

    for (const name of texts) {
      expect(name).toContain(text);
    }
  }

  async checkThaTheCheckBoxChecked() {
    await expect(this.checkBoxChecked).toBeVisible();
  }

  async checkThatTheCheckBoxUnChecked() {
    await expect(this.checkBoxChecked).not.toBeVisible();
  }

  async clickingOnTheClearAllFiltersButton() {
    await this.clearAllFiltersButton.click();
  }

  async clickingOnTheBuyButton() {
    await this.buyButton.click();
  }

  async expectIfclickingOnTheBuyButton() {
    await expect(this.page).toHaveURL('https://opensea.io/assets/matic/0xee37b43221375b93e3b3d60092210f681e68aeb2/103');
  }

  async selectNftId(text) {
    let selectNftIdOption = this.page.locator(`[class="paginate_button ${text}"]`);
    await selectNftIdOption.click();
  }
}