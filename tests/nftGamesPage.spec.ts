import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ page, webPage, topNavigation }) => {
    await webPage.hover(topNavigation.dropdownMenu);
    await webPage.click(topNavigation.nftGamesButton);
    await page.waitForLoadState();
  });

  const amountInShowDopdown = ['25', '50', '10', '100']
  for (const amount of amountInShowDopdown) {
    test(`Test the ability to use Show dropdown in the table with ${amount}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectAmountInshowDropdown(amount);
      await nftGamesPage.checkIfAmountInShowDropdownSelected(amount);
    })
  };

  const blockchaine = ['Avalanche', 'BSC', 'ETH', 'HIVE', 'Polygon', 'Ronin', 'Solana', 'Tezos', 'WAX', 'Other']
  for (const name of blockchaine) {
    test(`Test the ability to use blockchaine filters in the table with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectChainFilterByName(name);
      await nftGamesPage.checkThatTheChaineFiltered(name);
    })
  };

  // const sort = ['Name', 'Chain', 'Category', 'Price', 'Market Cap', 'Volume(24h)', '24h% change']
  // for (const title of sort) {
  //   test(`Test the ability to use sort by name, chain, category, price, market cap, volume, change in the table with ${title}`, async ({ nftGamesPage }) => {
  //     await nftGamesPage.selectSort(title);
  //     await nftGamesPage.checkThatTheSorted(title);
  //   })
  // };

  test('Test the ability to use pagination in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.selectNextOrPreviousButtonInPagination('Next');
    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.selectNextOrPreviousButtonInPagination('Previous');
    await expect(nftGamesPage.paginationCurrentbutton).toContainText('1');

    await nftGamesPage.selectNumberButtonInPagination('2');
    await expect(nftGamesPage.paginationCurrentbutton).toContainText('2');

    await nftGamesPage.selectNumberButtonInPagination('3');
    await expect(nftGamesPage.paginationCurrentbutton).toContainText('3');
  });

  test('Test the ability to use carusel', async ({ nftGamesPage }) => {
    await test.step('Clicking on the left button in carusel', async () => {
      await nftGamesPage.leftButtonInTheCarusel.click();
      await expect(nftGamesPage.expectedIfUseLeftButtonInTheCarusel).toBeVisible();
    });
    await test.step('Clicking on the right button in carusel', async () => {
      await nftGamesPage.rightButtonInTheCarusel.click();
      await expect(nftGamesPage.expectedIfUseRightButtonInTheCarusel).toBeVisible();
    });
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ nftGamesPage }) => {
    await test.step('Clicking on the Read More button in carusel', async () => {
      await nftGamesPage.clickReadMoreButton();
      await expect(nftGamesPage.readLessButton).toBeVisible();
    });
    await test.step('Clicking on the Read Less button in carusel', async () => {
      await nftGamesPage.clickReadLessButton();
      await expect(nftGamesPage.readMoreButton).toBeVisible();
    });
  });


  const faqsButtons = ['What Is NFT gaming?', 'How do I earn money through NFT gaming?', 'How many NFT games are there?', 'Can I earn money through NFT gaming?']
  for (const name of faqsButtons) {
    test(`Opening/Closing additional info with clicking on the btn Read More/Read Less in the FAQs section with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.clickFAQsButtons(name);
      await expect(nftGamesPage.expectResultIfOpenedAdditionalInfo).toBeVisible();

      await nftGamesPage.clickFAQsButtons(name);
      await expect(nftGamesPage.expectResultIfClosedAdditionalInfo).toBeVisible();
    });
  }

});
