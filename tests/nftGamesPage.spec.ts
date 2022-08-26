import { expect } from '@playwright/test';
import { faqsData } from '../testData/dataForTests';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ webPage, topNavigation }) => {
    await webPage.hover(topNavigation.dropdownMenu);
    await topNavigation.nftGamesButton.click();
  });

  test('Test the ability to use blockchaine filters in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.selectChainFilterByName('avalanche');
    await nftGamesPage.expectSelectedChainFilterByName('Avalanche');

    await nftGamesPage.selectChainFilterByName('bsc');
    await nftGamesPage.expectSelectedChainFilterByName('BSC');

    await nftGamesPage.selectChainFilterByName('eth');
    await nftGamesPage.expectSelectedChainFilterByName('ETH');

    await nftGamesPage.selectChainFilterByName('hive');
    await nftGamesPage.expectSelectedChainFilterByName('HIVE');

    await nftGamesPage.selectChainFilterByName('polygon');
    await nftGamesPage.expectSelectedChainFilterByName('Polygon');

    await nftGamesPage.selectChainFilterByName('ronin');
    await nftGamesPage.expectSelectedChainFilterByName('Ronin');

    await nftGamesPage.selectChainFilterByName('solana');
    await nftGamesPage.expectSelectedChainFilterByName('Solana');

    await nftGamesPage.selectChainFilterByName('tezos');
    await nftGamesPage.expectSelectedChainFilterByName('Tezos');

    await nftGamesPage.selectChainFilterByName('wax');
    await nftGamesPage.expectSelectedChainFilterByName('WAX');

    await nftGamesPage.selectChainFilterByName('other');
    await nftGamesPage.expectSelectedChainFilterByName('Other');
  });

  test('Test the ability to use filters by name, chain, category, price, market cap, volume, change in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.selectSort('Name');

    await expect(nftGamesPage.expectIfUseSortByName).toBeVisible();

    await nftGamesPage.selectSort('Chain');

    await expect(nftGamesPage.expectIfUseSortByChain).toBeVisible();

    await nftGamesPage.selectSort('Category');

    await expect(nftGamesPage.expectIfUseSortByCategory).toBeVisible();

    await nftGamesPage.selectSort('Price');

    await expect(nftGamesPage.expectIfUseSortByPrice).toBeVisible();

    await nftGamesPage.selectSort('Market Cap');

    await expect(nftGamesPage.expectIfUseSortByMarketCap).toBeVisible();

    await nftGamesPage.selectSort('Volume(24h)');

    await expect(nftGamesPage.expectIfUseSortByVolume).toBeVisible();

    await nftGamesPage.selectSort('24h% change');

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
    await nftGamesPage.showDropdown('25');

    await expect(nftGamesPage.expectedIfChosen25InDopdownShow).toBeVisible();
    await expect(nftGamesPage.expectedIfChosen50InDopdownShow).not.toBeVisible();

    await nftGamesPage.showDropdown('50');

    await expect(nftGamesPage.expectedIfChosen50InDopdownShow).toBeVisible();
    await expect(nftGamesPage.expectedIfChosen100InDopdownShow).not.toBeVisible();

    await nftGamesPage.showDropdown('100');

    await expect(nftGamesPage.expectedIfChosen100InDopdownShow).toBeVisible();

    await nftGamesPage.showDropdown('25');

    await expect(nftGamesPage.expectedIfChosen25InDopdownShow).not.toBeVisible();
  });

  test('Test the ability to use carusel', async ({ webPage, nftGamesPage }) => {
    await webPage.click(nftGamesPage.leftButtonInTheCarousel);

    await expect(nftGamesPage.expectedIfUseLeftButtonInTheCarusel).toBeVisible();

    await webPage.click(nftGamesPage.rightButtonInTheCarousel);

    await expect(nftGamesPage.expectedIfUseRightButtonInTheCarusel).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ webPage, nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.whatIsNFTgaming);
    await webPage.click(nftGamesPage.readMoreButton);

    await expect(nftGamesPage.readLessButton).toBeVisible();

    await webPage.click(nftGamesPage.readLessButton);

    await expect(nftGamesPage.readMoreButton).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the What Is NFT gaming?', async ({ nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.whatIsNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).toContainText(faqsData.expectWhatIsNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.whatIsNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).not.toContainText(faqsData.expectWhatIsNFTgaming);
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the How do I earn money through NFT gaming?', async ({ webPage, nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.howDoIEarnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).toContainText(faqsData.expectHowDoIEarnMoneyThroughNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.howDoIEarnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).not.toContainText(faqsData.expectHowDoIEarnMoneyThroughNFTgaming);
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the How many NFT games are there?', async ({ webPage, nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.howManyNFTgamesAreThere);
    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).toContainText(faqsData.expectHowManyNFTgamesAreThere);

    await nftGamesPage.clickFAQsButtons(faqsData.howManyNFTgamesAreThere);
    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).not.toContainText(faqsData.expectHowManyNFTgamesAreThere);
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the Can I earn money through NFT gaming?', async ({ webPage, nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.canIearnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).toContainText(faqsData.expectCanIearnMoneyThroughNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.canIearnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).not.toContainText(faqsData.expectCanIearnMoneyThroughNFTgaming);
  });
});
