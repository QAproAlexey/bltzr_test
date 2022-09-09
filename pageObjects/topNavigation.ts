import { Locator, Page, BrowserContext } from '@playwright/test';

import { WebPage } from './webPage';

export class TopNavigation extends WebPage {
  readonly farmingLink: Locator;
  readonly balthazarButton: Locator;
  readonly dropdownMenu: Locator;
  readonly lendButton: Locator;
  readonly playButton: Locator;
  readonly connectWalletButton: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.farmingLink = page.locator('#farming-nav-link')
    this.balthazarButton = page.locator('[class="logo__link"]');
    this.dropdownMenu = page.locator('[class="css-pn62df"]');
    this.lendButton = page.locator('text=Lend');
    this.playButton = page.locator('text=Play');
    this.connectWalletButton = page.locator('text=Connect wallet');
  }

  async selectButtonInTheLeftDropdown(text) {
    await this.dropdownMenu.hover();
    let selectButtonOption = this.page.locator(`(//p[text()="${text}"])`);
    await selectButtonOption.click();
    await this.page.waitForLoadState();
  }

  async selectButtonInTopNavigation(text) {
    let selectButtonOption = this.page.locator(`(//a[text()="${text}"])`);
    await selectButtonOption.click();
    await this.page.waitForLoadState();
  }

}
