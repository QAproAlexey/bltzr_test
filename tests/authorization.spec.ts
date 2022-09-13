import { test } from '../fixtures/metamaskFixture';

test.describe('Check connection of wallet', () => {
  test(`Check the ability to connect Metamask`, async ({ connectWalletScreen }) => {
    await connectWalletScreen.connectMetaMask();
  });
});