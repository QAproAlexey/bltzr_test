import { test as base, chromium, expect } from '@playwright/test';

import { ConnectWalletScreen } from "../pageObjects/connectWalletScreen";
import { MetamaskPage } from "../pageObjects/actions/metamaskPage";
import { TopNavigation } from "../pageObjects/topNavigation";

type ixsFixtures = {
  connectWalletScreen: ConnectWalletScreen;
  metamaskPage: MetamaskPage;
  topNavigation: TopNavigation;
};

export const test = base.extend<ixsFixtures>({
  context: async ({ browser }, use) => {
    const pathToExtension = require('path').join(__dirname, '..', 'extensions/metamask');
    const userDataDir = '';
    const browserContext = await chromium.launchPersistentContext(userDataDir, {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    });

    await Promise.all([
      browserContext.waitForEvent('page'),
    ]);
    await use(browserContext);
    await browserContext.close();
  },

  // Overwriting of page for using it in the same browser with metamask
  page: async ({ context, baseURL }, use) => {
    const metamaskContextPage = await context.newPage();

    await metamaskContextPage.goto(baseURL);
    await use(metamaskContextPage);
  },

  metamaskPage: [async ({ context }, use) => {
    const pageWithMetamask = await context.pages()[1];
    const metamaskPage = new MetamaskPage(pageWithMetamask);

    await metamaskPage.makeSureMetamaskLoaded();
    await metamaskPage.fullyLoginToMetamask(process.env.METAMASK_RECOVERY, process.env.METAMASK_PASSWORD);
    await use(metamaskPage);
  }, { auto: true }],

  connectWalletScreen: async ({ page, context }, use) => {
    await use(new ConnectWalletScreen(page, context));
  },

  topNavigation: async ({ page, context }, use) => {
    await use(new TopNavigation(page, context));
  },

});