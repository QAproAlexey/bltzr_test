import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';
import { timeouts } from "../helpers/timeouts";

export class NFTgamesPage extends WebPage {
  readonly chainFiltered: Locator;
  readonly paginationCurrentButton: Locator;
  readonly dropdownShowInTheTable: Locator;
  readonly leftButtonInTheCarousel: Locator;
  readonly rightButtonInTheCarousel: Locator;
  readonly firstElementInCarousel: Locator;
  readonly lastElementInCarousel: Locator;
  readonly urlElementInCarousel: Locator;
  readonly readMoreButton: Locator;
  readonly readLessButton: Locator;
  readonly expectWhatIsNFTgaming: Locator;
  readonly expectHowDoIEarnMoneyThroughNFTgaming: Locator;
  readonly expectHowManyNFTgamesAreThere: Locator;
  readonly expectCanIEarnMoneyThroughNFTgaming: Locator;
  readonly expectFAQsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.chainFiltered = page.locator('[data-label="Chain"]');
    this.paginationCurrentButton = page.locator('[class="paginate_button current"]');
    this.dropdownShowInTheTable = page.locator('select[name="DataTables_Table_0_length"]');
    this.leftButtonInTheCarousel = page.locator('[class="icon icon-arrow-left"]');
    this.rightButtonInTheCarousel = page.locator('[class="slick-next slick-arrow"]');
    this.firstElementInCarousel = page.locator('[class="game-item slick-slide slick-current slick-active"]');
    this.lastElementInCarousel = page.locator('(//div[@class="game-item slick-slide slick-active"])[3]');
    this.urlElementInCarousel = page.locator('(//div[@class="game-item slick-slide slick-active"])[3]');
    this.readMoreButton = page.locator('(//a[text()="Read More "])');
    this.readLessButton = page.locator('(//a[text()="Read Less "])');
    this.expectWhatIsNFTgaming = page.locator('(//p[contains(text(),"NFT gaming is playing NFT games that offer")])');
    this.expectHowDoIEarnMoneyThroughNFTgaming = page.locator('(//p[contains(text(),"For most NFT games out there, you need to play to earn money")])');
    this.expectHowManyNFTgamesAreThere = page.locator('(//p[contains(text(),"There are tons of different NFT games out there")])');
    this.expectCanIEarnMoneyThroughNFTgaming = page.locator('(//p[contains(text(),"Yes, you can earn money through NFT gaming")])');
    this.expectFAQsButton = page.locator('(//h3[text()="What Is NFT gaming?"]/parent::div/following-sibling::div)');
  }


  async selectAmountInShowDropdown(value) {
    await this.dropdownShowInTheTable.click();
    await this.dropdownShowInTheTable.selectOption(value);
  }

  async checkIfAmountInShowDropdownSelected(amount: number) {
    let allElements = this.page.locator('[data-label="Name"]');
    let row = await allElements.count();
    if (amount = 100) {
      expect(row >= 51 && row <= 100);
    }
    if (amount = 25) {
      expect(row >= 11 && row <= 25);
    }
    if (amount = 10) {
      expect(row >= 0 && row <= 10);
    }
    if (amount = 50) {
      expect(row >= 26 && row <= 50);
    }
    else { console.log('not enough elements on the page') };
  }

  async selectChainFilterByName(text) {
    let chainFilterOption = this.page.locator(`[data-cat="${text}"]`.toLowerCase());
    await chainFilterOption.click();
  }

  async checkThatTheChainFiltered(name: string) {
    const texts = await this.chainFiltered.allTextContents();
    for (const chain of texts) {
      await expect(chain).toContain(name);
    }
  }

  async selectNextOrPreviousButtonInPagination(text) {
    let selectPaginationOption = this.page.locator(`[class="paginate_button ${text}"]`);
    await selectPaginationOption.click();
  }

  async selectNumberButtonInPagination(text) {
    let selectPaginationOption = this.page.locator(`[data-dt-idx="${text}"]`);
    await selectPaginationOption.click();
  }

  async clickReadMoreButton() {
    await this.readMoreButton.click();
  }

  async clickReadLessButton() {
    await this.readLessButton.click();
  }

  async clickFAQsButtons(text) {
    let faqsOption = this.page.locator(`(//div[contains(h3,"${text}")])`);
    await faqsOption.click();
  }
  async checkThatTheFAQsOpened(name) {
    let faqsOption = this.page.locator(`(//h3[text()="${name}"]/parent::div/following-sibling::div)`);
    let attribute = await faqsOption.getAttribute('style');
    await expect(attribute).toContain("display: block;");
  }
  async checkThatTheFAQsClosed(name) {
    await this.page.waitForTimeout(timeouts.shortTimeout);
    let faqsOption = this.page.locator(`(//h3[text()="${name}"]/parent::div/following-sibling::div)`);
    let attribute = await faqsOption.getAttribute('style');
    await expect(attribute).toContain("display: none;");
  }

  async checkIfClickLeftButtonInCarousel() {
    await this.leftButtonInTheCarousel.click();
    let locator = this.firstElementInCarousel;
    const atr = await locator.getAttribute('atr');
    await expect(atr).toBe('0');
    await this.rightButtonInTheCarousel.click();
    await expect(atr).not.toBe('0');
  }

  async checkIfClickRightButtonInCarousel() {
    await this.rightButtonInTheCarousel.click();
    let locator = this.lastElementInCarousel;
    const atr = await locator.getAttribute('atr');
    await expect(atr).toBe('0');
    await this.leftButtonInTheCarousel.click();
    await expect(atr).not.toBe('0');
  }

  async checkIfRedirectedToGameFromCarousel() {
    const locator = this.urlElementInCarousel;
    const href = await locator.getAttribute('href');
    await this.firstElementInCarousel.click();
    await expect(this.page).toHaveURL(`https://bltzr.gg${href}`);
  }

}
