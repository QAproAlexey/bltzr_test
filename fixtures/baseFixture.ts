import { MarketplacePage } from '../pageObjects/marketplacePage';
import { ResearchPage } from '../pageObjects/researchPage';
import { NFTgamesPage } from '../pageObjects/nftGamesPage';
import { TopNavigation } from '../pageObjects/topNavigation';
import { WebPage } from '../pageObjects/webPage';
import { test as base } from '@playwright/test';

export const test = base.extend<{
  webPage: WebPage;
  topNavigation: TopNavigation;
  nftGamesPage: NFTgamesPage;
  marketplacePage: MarketplacePage;
  researchPage: ResearchPage;

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
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});