import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ webPage, topNavigation }) => {
    await webPage.hover(topNavigation.dropdownMenu);
    await webPage.click(topNavigation.nftGamesButton);
  });

  test('Test the ability to use blockchaine filters in the table', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.avalancheFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Avalanche');

    await webPage.click(nftGamesPage.bcsFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('BSC');

    await webPage.click(nftGamesPage.ethFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('ETH');

    await webPage.click(nftGamesPage.hiveFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('HIVE');

    await webPage.click(nftGamesPage.polygonFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Polygon');

    await webPage.click(nftGamesPage.roninFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Ronin');

    await webPage.click(nftGamesPage.solanaFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Solana');

    await webPage.click(nftGamesPage.tezosFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Tezos');

    await webPage.click(nftGamesPage.waxFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('WAX');

    await webPage.click(nftGamesPage.otherFilterButton);

    await expect(nftGamesPage.expectIfFilterChosen).toContainText('Other');
  });

  test('Test the ability to use filters by name, chain, category, price, market cap, volume, change in the table', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.nameSortButton);

    await expect(nftGamesPage.expectIfUseSortByName).toBeVisible();

    await webPage.click(nftGamesPage.chainSortButton);

    await expect(nftGamesPage.expectIfUseSortByChain).toBeVisible();

    await webPage.click(nftGamesPage.categorySortButton);

    await expect(nftGamesPage.expectIfUseSortByCategory).toBeVisible();

    await webPage.click(nftGamesPage.priceSortButton);

    await expect(nftGamesPage.expectIfUseSortByPrice).toBeVisible();

    await webPage.click(nftGamesPage.marketCapSortButton);

    await expect(nftGamesPage.expectIfUseSortByMarketCap).toBeVisible();

    await webPage.click(nftGamesPage.volumeSortButton);

    await expect(nftGamesPage.expectIfUseSortByVolume).toBeVisible();

    await webPage.click(nftGamesPage.changeSortButton);

    await expect(nftGamesPage.expectIfUseSortByChange).toBeVisible();

  });

  test('Test the ability to use pagination in the table', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.paginationNextButton);

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await webPage.click(nftGamesPage.paginationPreviousButton);

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('1');

    await webPage.click(nftGamesPage.pagination2button);

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await webPage.click(nftGamesPage.pagination1button);

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('1');

  });

  test('Test the ability to use dropdown Show in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.dropdownShowInTheTable.selectOption('25');

    await expect(nftGamesPage.expectedIfChosen25InDopdownShow).toBeVisible();
    await expect(nftGamesPage.expectedIfChosen50InDopdownShow).not.toBeVisible();

    await nftGamesPage.dropdownShowInTheTable.selectOption('50');

    await expect(nftGamesPage.expectedIfChosen50InDopdownShow).toBeVisible();
    await expect(nftGamesPage.expectedIfChosen100InDopdownShow).not.toBeVisible();

    await nftGamesPage.dropdownShowInTheTable.selectOption('100');

    await expect(nftGamesPage.expectedIfChosen100InDopdownShow).toBeVisible();

    await nftGamesPage.dropdownShowInTheTable.selectOption('10');

    await expect(nftGamesPage.expectedIfChosen25InDopdownShow).not.toBeVisible();
  });

  test('Test the ability to use carusel', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.leftButtonInTheCarousel);

    await expect(nftGamesPage.expectedIfUseLeftButtonInTheCarusel).toBeVisible();

    await webPage.click(nftGamesPage.rightButtonInTheCarousel);

    await expect(nftGamesPage.expectedIfUseRightButtonInTheCarusel).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.readMoreButton);

    await expect(nftGamesPage.readLessButton).toBeVisible();

    await webPage.click(nftGamesPage.readLessButton);

    await expect(nftGamesPage.readMoreButton).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the What Is NFT gaming?', async ({ webPage, nftGamesPage }) => {
    await await webPage.click(nftGamesPage.readMoreOrLessWhatIsNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).toBeVisible();

    await webPage.click(nftGamesPage.readMoreOrLessWhatIsNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).not.toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the How do I earn money through NFT gaming?', async ({ webPage, nftGamesPage }) => {
    await await webPage.click(nftGamesPage.readMoreOrLessHowDoIEarnMoneyThroughNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).toBeVisible();

    await await webPage.click(nftGamesPage.readMoreOrLessHowDoIEarnMoneyThroughNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).not.toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the How many NFT games are there?', async ({ webPage, nftGamesPage }) => {
    await await webPage.click(nftGamesPage.readMoreOrLessHowManyNFTgamesAreThereButton);

    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).toBeVisible();

    await await webPage.click(nftGamesPage.readMoreOrLessHowManyNFTgamesAreThereButton);

    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).not.toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the Can I earn money through NFT gaming?', async ({ webPage, nftGamesPage }) => {
    await await webPage.click(nftGamesPage.readMoreOrLessCanIearnMoneyThroughNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreOrLessCanIearnMoneyThroughNFTgamingText).toBeVisible();

    await await webPage.click(nftGamesPage.readMoreOrLessCanIearnMoneyThroughNFTgamingButton);

    await expect(nftGamesPage.expectReadMoreOrLessCanIearnMoneyThroughNFTgamingText).not.toBeVisible();
  });
});
