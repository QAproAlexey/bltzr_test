import { expect } from '@playwright/test';
import { faqsData } from '../testData/dataForTests';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ webPage, topNavigation }) => {
    await topNavigation.dropdownMenu.hover();
    await topNavigation.nftGamesButton.click();
  });

  const blockchaine = ['Avalanche', 'BSC', 'ETH', 'HIVE', 'Polygon', 'Ronin', 'Solana', 'Tezos', 'WAX', 'Other']
  for (const name of blockchaine) {
    test(`Test the ability to use blockchaine filters in the table with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectChainFilterByName(name);
      await nftGamesPage.checkThatChainFilterByNameChosen(name);
    })
  };

  const sort = ['Name', 'Chain', 'Category', 'Price', 'Market Cap', 'Volume(24h)', '24h% change']
  for (const title of sort) {
    test(`Test the ability to use sort by name, chain, category, price, market cap, volume, change in the table with ${title}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectSort(title);
    })
  };

  test('Test the ability to use pagination in the table', async ({ webPage, nftGamesPage }) => {
    await nftGamesPage.paginationNextButton.click();

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.paginationPreviousButton.click();

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('1');

    await nftGamesPage.pagination2button.click();

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.pagination1button.click();

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
    await nftGamesPage.leftButtonInTheCarousel.click();

    await expect(nftGamesPage.expectedIfUseLeftButtonInTheCarusel).toBeVisible();

    await nftGamesPage.rightButtonInTheCarousel.click();

    await expect(nftGamesPage.expectedIfUseRightButtonInTheCarusel).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ nftGamesPage }) => {
    await nftGamesPage.clickReadMoreButton();

    await nftGamesPage.clickReadLessButton();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less in the FAQs section', async ({ nftGamesPage }) => {
    await nftGamesPage.clickFAQsButtons(faqsData.whatIsNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).toContainText(faqsData.expectWhatIsNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.whatIsNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).not.toContainText(faqsData.expectWhatIsNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.howDoIEarnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).toContainText(faqsData.expectHowDoIEarnMoneyThroughNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.howDoIEarnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText).not.toContainText(faqsData.expectHowDoIEarnMoneyThroughNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.howManyNFTgamesAreThere);
    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).toContainText(faqsData.expectHowManyNFTgamesAreThere);

    await nftGamesPage.clickFAQsButtons(faqsData.howManyNFTgamesAreThere);
    await expect(nftGamesPage.expectReadMoreOrLessHowManyNFTgamesAreThereText).not.toContainText(faqsData.expectHowManyNFTgamesAreThere);

    await nftGamesPage.clickFAQsButtons(faqsData.canIearnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).toContainText(faqsData.expectCanIearnMoneyThroughNFTgaming);

    await nftGamesPage.clickFAQsButtons(faqsData.canIearnMoneyThroughNFTgaming);
    await expect(nftGamesPage.expectReadMoreOrLessWhatIsNFTgamingText).not.toContainText(faqsData.expectCanIearnMoneyThroughNFTgaming);
  });

});
