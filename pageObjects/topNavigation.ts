import { Locator, Page } from '@playwright/test';
import { WebPage } from './webPage';

export class TopNavigation extends WebPage {
  readonly balthazarButton: Locator;
  readonly dropdownMenu: Locator;
  readonly nftGamesButton: Locator;
  readonly playToEarnButton: Locator;
  readonly becomeAscolarButton: Locator;
  readonly scholarLtiProgramTButton: Locator;
  readonly metaverseExplorationButton: Locator;
  readonly teamButton: Locator;
  readonly blogButton: Locator;
  readonly whitepaperButton: Locator;
  readonly careersButton: Locator;
  readonly contactUsButton: Locator;
  readonly researchButton: Locator;
  readonly launchpadButton: Locator;
  readonly marketplaceButton: Locator;
  readonly lendButton: Locator;
  readonly playButton: Locator;
  readonly connectWalletButton: Locator;

  constructor(page: Page) {
    super(page);
    this.balthazarButton = page.locator('[class="logo__link"]');
    this.dropdownMenu = page.locator('[class="css-pn62df"]');
    this.nftGamesButton = page.locator('(//p[@class="chakra-text css-epvm6"])[1]');
    this.playToEarnButton = page.locator('(//p[@class="chakra-text css-epvm6"])[2]');
    this.becomeAscolarButton = page.locator('(//p[@class="chakra-text css-epvm6"])[3]');
    this.scholarLtiProgramTButton = page.locator('(//p[@class="chakra-text css-epvm6"])[4]');
    this.metaverseExplorationButton = page.locator('(//p[@class="chakra-text css-epvm6"])[5]');
    this.teamButton = page.locator('(//p[@class="chakra-text css-epvm6"])[6]');
    this.blogButton = page.locator('(//p[@class="chakra-text css-epvm6"])[7]');
    this.whitepaperButton = page.locator('(//p[@class="chakra-text css-epvm6"])[8]');
    this.careersButton = page.locator('(//p[@class="chakra-text css-epvm6"])[9]');
    this.contactUsButton = page.locator('(//p[@class="chakra-text css-epvm6"])[10]');
    this.researchButton = page.locator('text=Research');
    this.launchpadButton = page.locator('text=Launchpad');
    this.marketplaceButton = page.locator('text=Marketplace');
    this.lendButton = page.locator('text=Lend');
    this.playButton = page.locator('text=Play');
    this.connectWalletButton = page.locator('text=Connect wallet');
  }

}
