import { BrowserContext, Locator, Page, expect } from '@playwright/test';

import { MetamaskPage } from "../pageObjects/actions/metamaskPage";
import { WebPage } from "./webPage";
import { timeouts } from "../helpers/timeouts";

export class ConnectWalletScreen extends WebPage {
  readonly context: BrowserContext;
  readonly connectWalletButton: Locator;
  readonly connectViaMetamaskButton: Locator;
  readonly connectViaMetamaskButtonSelector: string = '(//button[@class="chakra-button css-dh9oos"])[4]';
  readonly metamaskPage: MetamaskPage;
  readonly connectedStatusButton: Locator;
  readonly helpPopUpButton: Locator;
  readonly loaderIcon: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page);
    this.context = context;
    this.metamaskPage = new MetamaskPage(page, context);
    this.connectWalletButton = page.locator('(//p[contains(text(),"Connect wallet")])[1]');
    this.connectViaMetamaskButton = page.locator(this.connectViaMetamaskButtonSelector);
    this.connectedStatusButton = page.locator('(//div[@class="chakra-container css-1yz7a0z"] //div[contains(text(),"Connected")])');
    this.helpPopUpButton = page.locator('[data-testid="launcher"]');
    this.loaderIcon = page.locator('(//a[text()="Loading..."])');
  }

  async clickConnectWalletButton() {
    await this.connectWalletButton.click();
  }

  async connectAndSignMetamask(openedMetamaskPage: Page) {
    await Promise.all([
      this.context.waitForEvent('page', { timeout: timeouts.shortTimeout })
        .then(async () => {
          const signPage = this.context.pages()[3];
          await this.metamaskPage.signMetamask(signPage);
        })
        .catch(async () => {
          const signPage = this.context.pages()[3];
          await this.metamaskPage.signMetamask(signPage);
        }),
      openedMetamaskPage.click(this.metamaskPage.metamaskElements.connectMetamaskPopUpButton)
    ]);
  }

  async connectMetaMask() {
    await this.clickConnectWalletButton();
    const metamaskPopUpPage = await this.openNewPageByClick(this.page, this.connectViaMetamaskButtonSelector);
    await metamaskPopUpPage.click(this.metamaskPage.metamaskElements.nextMetamaskPopUpButton);
    await this.connectAndSignMetamask(metamaskPopUpPage);
    await this.loaderIcon.waitFor({ state: "detached", timeout: timeouts.shortTimeout });
    await this.page.waitForTimeout(timeouts.timeoutForSignWindow);
    await this.page.reload();
    await expect(this.connectedStatusButton).toBeVisible();
  }

  async openNewPageByClick(page: Page, element: string) {
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      page.click(element)
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}