import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ webPage, topNavigation }) => {
    await webPage.hover(topNavigation.dropdownMenu);
    await webPage.click(topNavigation.nftGamesButton);
  });

  const blockchaine = ['Avalanche', 'BSC', 'ETH', 'HIVE', 'Polygon', 'Ronin', 'Solana', 'Tezos', 'WAX', 'Other']
  for (const name of blockchaine) {
    test(`Test the ability to use blockchaine filters in the table with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectChainFilterByName(name);
      await nftGamesPage.checkThatTheChaineFiltered(name);
    })
  };

  const sort = ['Name', 'Chain', 'Category', 'Price', 'Market Cap', 'Volume(24h)', '24h% change']
  for (const title of sort) {
    test(`Test the ability to use sort by name, chain, category, price, market cap, volume, change in the table with ${title}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectSort(title);
      await nftGamesPage.checkThatTheSorted(title);
    })
  };

  test('Test the ability to use pagination in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.selectNextOrPreviousButtonInPagination('next');

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.selectNextOrPreviousButtonInPagination('previous');

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('1');

    await nftGamesPage.selectNumberButtonInPagination('2');

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.selectNumberButtonInPagination('3');

    await expect(nftGamesPage.paginationCurrentbutton).toContainText('3');

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

    await nftGamesPage.showDropdown('10');

    await expect(nftGamesPage.expectedIfChosen25InDopdownShow).not.toBeVisible();
  });

  test('Test the ability to use carusel', async ({ nftGamesPage }) => {
    await nftGamesPage.leftButtonInTheCarousel.click();

    await expect(nftGamesPage.expectedIfUseLeftButtonInTheCarusel).toBeVisible();

    await nftGamesPage.rightButtonInTheCarousel.click();

    await expect(nftGamesPage.expectedIfUseRightButtonInTheCarusel).toBeVisible();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ nftGamesPage }) => {
    await nftGamesPage.clickReadMoreButton();

    expect(nftGamesPage.readLessButton).toBeVisible();

    await nftGamesPage.clickReadLessButton();

    expect(nftGamesPage.readMoreButton).toBeVisible();
  });


  const faqsButtons = ['What Is NFT gaming?', 'How do I earn money through NFT gaming?', 'How many NFT games are there?', 'Can I earn money through NFT gaming?']
  for (const name of faqsButtons) {
    test(`Opening/Closing additional info with clicking on the btn Read More/Read Less in the FAQs section with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.clickFAQsButtons(name);

      await nftGamesPage.checkFaqBlockDisplayState('block');

      await nftGamesPage.clickFAQsButtons(name);

      await nftGamesPage.checkFaqBlockDisplayState('none');
    });
  }

});
