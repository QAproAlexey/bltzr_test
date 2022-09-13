import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('NFT Games page', async () => {
  test.beforeEach(async ({ topNavigation }) => {
    await topNavigation.selectButtonInTheLeftDropdown('NFT games');
  });

  const amountInShowDropdown = ['25', '10', '50', '100']
  for (const amount of amountInShowDropdown) {
    test(`Test the ability to use Show dropdown in the table with ${amount}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectAmountInShowDropdown(amount);

      await nftGamesPage.checkIfAmountInShowDropdownSelected(Number(amount));
    })
  };

  const blockchain = ['Avalanche', 'BSC', 'ETH', 'HIVE', 'Polygon', 'Ronin', 'Solana', 'Tezos', 'WAX', 'Other']
  for (const name of blockchain) {
    test(`Test the ability to use blockchain filters in the table with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.selectChainFilterByName(name);

      await nftGamesPage.checkThatTheChainFiltered(name);
    })
  };

  test('Test the ability to use pagination in the table', async ({ nftGamesPage }) => {
    await nftGamesPage.selectNextOrPreviousButtonInPagination('next');
    await expect(nftGamesPage.paginationCurrentButton).toContainText('2');

    await nftGamesPage.selectNextOrPreviousButtonInPagination('previous');
    await expect(nftGamesPage.paginationCurrentButton).toContainText('1');

    await nftGamesPage.selectNumberButtonInPagination('3');
    await expect(nftGamesPage.paginationCurrentButton).toContainText('3');
  });

  test('Test the ability to use carousel', async ({ nftGamesPage }) => {
    await nftGamesPage.checkIfClickLeftOrRightButtons();

    await nftGamesPage.checkIfRedirectedToGameFromCarousel();
  });

  test('Opening/Closing additional info with clicking on the btn Read More/Read Less', async ({ nftGamesPage }) => {
    await test.step('Clicking on the Read More button', async () => {
      await nftGamesPage.clickReadMoreButton();

      await expect(nftGamesPage.readLessButton).toBeVisible();
    });
    await test.step('Clicking on the Read Less button', async () => {
      await nftGamesPage.clickReadLessButton();

      await expect(nftGamesPage.readMoreButton).toBeVisible();
    });
  });

  const nameButton = ['What Is NFT gaming?', 'How do I earn money through NFT gaming?', 'How many NFT games are there?', 'Can I earn money through NFT gaming?']
  for (const name of nameButton) {
    test(`Opening/Closing additional info with clicking on the btn Read More/Read Less in the FAQs section with ${name}`, async ({ nftGamesPage }) => {
      await nftGamesPage.clickFAQsButtons(name);
      await nftGamesPage.checkThatTheFAQsOpened(name);

      await nftGamesPage.clickFAQsButtons(name);
      await nftGamesPage.checkThatTheFAQsClosed(name);
    })
  };
});
