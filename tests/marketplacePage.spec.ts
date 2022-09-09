import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('Marketplace Page', async () => {
  test.beforeEach(async ({ topNavigation }) => {
    await topNavigation.selectButtonInTopNavigation('Marketplace');
  });


  test('Test the ability to use filters & checkBoxes', async ({ marketplacePage }) => {
    await test.step('Check/Uncheck filter checkboxes', async () => {
      await marketplacePage.selectFilterCheckBox('Axie Infinity');
      expect(marketplacePage.checkThaTheCheckBoxChecked);
      expect(marketplacePage.checkThatTheFilterCheckBoxChecked('Axie Infinity'));

      await marketplacePage.selectFilterCheckBox('Axie Infinity');
      expect(marketplacePage.checkThatTheCheckBoxUnChecked);

      await marketplacePage.selectFilterCheckBox('Splinterlands');
      expect(marketplacePage.checkThaTheCheckBoxChecked);
      expect(marketplacePage.checkThatTheFilterCheckBoxChecked('Splinterlands'));

      await marketplacePage.selectFilterCheckBox('Splinterlands');
      expect(marketplacePage.checkThatTheCheckBoxUnChecked);
    })
    await test.step('Check that the filters reseted when clicking on the btn Clear all filters', async () => {
      await marketplacePage.selectFilterCheckBox('Axie Infinity');
      await marketplacePage.selectFilterCheckBox('Splinterlands');
      await marketplacePage.clickingOnTheClearAllFiltersButton();

      expect(marketplacePage.checkThatTheCheckBoxUnChecked);
    })
  });

  test('Test the ability to clicking on th button BUY', async ({ marketplacePage }) => {
    await marketplacePage.clickingOnTheBuyButton();
    expect(marketplacePage.expectIfclickingOnTheBuyButton);
  });

  const nftId = ['103', '104', '105', '106', '100']
  for (const id of nftId) {
    test(`Test the ability to use blockchaine filters in the table with ${id}`, async ({ marketplacePage }) => {
      await marketplacePage.selectNftId(id);
      await marketplacePage.expectIfclickingOnTheBuyButton(id);
    })
  };

});
