import { MarketplacePage } from '../pageObjects/marketplacePage';
import { ResearchPage } from '../pageObjects/researchPage';
import { NFTgamesPage } from '../pageObjects/nftGamesPage';
import { TopNavigation } from '../pageObjects/topNavigation';
import { MetamaskPage } from "../pageObjects/metamaskPage";
import { WebPage } from '../pageObjects/webPage';
import { ConnectWalletScreen } from '../pageObjects/connectWalletScreen';
import { test as base } from '@playwright/test';

export const test = base.extend<{
  webPage: WebPage;
  topNavigation: TopNavigation;
  nftGamesPage: NFTgamesPage;
  marketplacePage: MarketplacePage;
  researchPage: ResearchPage;
  metamaskPage: MetamaskPage;
  connectWalletScreen: ConnectWalletScreen;

}>({
  webPage: async ({ page }, use) => {
    await use(new WebPage(page)
    );
  },
  topNavigation: async ({ page }, use) => {
    await use(new TopNavigation(page)
    );
  },
  nftGamesPage: async ({ page }, use) => {
    await use(new NFTgamesPage(page)
    );
  },
  marketplacePage: async ({ page }, use) => {
    await use(new MarketplacePage(page)
    );
  },
  researchPage: async ({ page }, use) => {
    await use(new ResearchPage(page)
    );
  },
  metamaskPage: async ({ page, context }, use) => {
    await use(new MetamaskPage(page, context)
    );
  },
  connectWalletScreen: async ({ page, context }, use) => {
    await use(new ConnectWalletScreen(page, context)
    );
  },
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});