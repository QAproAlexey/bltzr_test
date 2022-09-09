import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test.describe('Research Page', async () => {
  test.beforeEach(async ({ topNavigation }) => {
    await topNavigation.selectButtonInTopNavigation('Research');
  });

  const gameName = ['Balthazar Research Report: Conquer Laria in Koakuma', 'Balthazar Research Report: Explore Nostalgia in Domi Online', 'Balthazar Research Report: Soar through space in Phantom Galaxies', 'Balthazar Research Report: Can’t Stop the Guild of Guardians', 'Balthazar Research Report: The Harvest is Nigh']
  for (const name of gameName) {
    test(`Test the ability to clicking on the Name Game or Read Full report button with ${name}`, async ({ researchPage }) => {
      await researchPage.selectGameByName(name);
      await expect(researchPage.expectIfGameNamePresent).toContainText(name);
    })
  };

  test('Test the ability to use pagination', async ({ researchPage }) => {
    await researchPage.selectNextOrPreviousButtonInPagination('Next');
    await expect(researchPage.currentPagePagination).toContainText('2');

    await researchPage.selectNextOrPreviousButtonInPagination('Previous');
    await expect(researchPage.currentPagePagination).toContainText('1');

    await researchPage.selectNumberButtonInPagination('3');
    await expect(researchPage.currentPagePagination).toContainText('3');
  });
});
