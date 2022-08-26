import { NFTgamesPage } from '../pageObjects/nftGamesPage';
import { TopNavigation } from '../pageObjects/topNavigation';
<<<<<<< HEAD
import { WebPage } from '../pageObjects/webPage';
=======
import { NFTgamesPage } from '../pageObjects/nftGamesPage';
>>>>>>> 6df476cbca8af05adc65aefcba8911e41a2f6d74
import { test as base } from '@playwright/test';

export const test = base.extend<{
  webPage: WebPage;
  topNavigation: TopNavigation;

  nftGamesPage: NFTgamesPage;

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

  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});