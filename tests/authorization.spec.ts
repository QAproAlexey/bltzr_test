import { expect } from '@playwright/test';
import { test } from '../fixtures/metamaskFixture';

test.describe('Check connection of wallet', () => {
  test(`Check the ability to connect Metamask`, async ({ connectWalletScreen, topNavigation }) => {
    await connectWalletScreen.connectMetaMask();

    await expect(topNavigation.farmingLink).toBeVisible();
  });
});