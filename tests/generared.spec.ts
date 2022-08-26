import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to about:blank
  await page.goto('about:blank');

  // Go to chrome-error://chromewebdata/
  await page.goto('chrome-error://chromewebdata/');

  // Go to https://bltzr.gg/nft-games/
  await page.goto('https://bltzr.gg/nft-games/');

  // Click text=Show 102550100 entries
  await page.locator('text=Show 102550100 entries').click();

  // Select 25
  await page.locator('select[name="DataTables_Table_0_length"]').selectOption('25');

});