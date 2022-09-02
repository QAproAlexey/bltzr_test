import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class NFTgamesPage extends WebPage {
  readonly paginationCurrentbutton: Locator;
  readonly dropdownShowInTheTable: Locator;
  readonly expectedIfChosen25InDopdownShow: Locator;
  readonly expectedIfChosen50InDopdownShow: Locator;
  readonly expectedIfChosen100InDopdownShow: Locator;
  readonly expectedIfChosen10InDopdownShow: Locator;
  readonly leftButtonInTheCarousel: Locator;
  readonly rightButtonInTheCarousel: Locator;
  readonly expectedIfUseLeftButtonInTheCarusel: Locator;
  readonly expectedIfUseRightButtonInTheCarusel: Locator;
  readonly readMoreButton: Locator;
  readonly readLessButton: Locator;
  readonly expectResultIfClosedAdditionalInfo: Locator;
  readonly chainColumnExpect: Locator;

  constructor(page: Page) {
    super(page);
    this.paginationCurrentbutton = page.locator('[class="paginate_button current"]');
    this.dropdownShowInTheTable = page.locator('select[name="DataTables_Table_0_length"]');
    this.expectedIfChosen25InDopdownShow = page.locator('(//div[@class="filter-name__detail"])[25]');
    this.expectedIfChosen50InDopdownShow = page.locator('(//div[@class="filter-name__detail"])[50]');
    this.expectedIfChosen100InDopdownShow = page.locator('(//div[@class="filter-name__detail"])[100]');;
    this.expectedIfChosen10InDopdownShow = page.locator('(//div[@class="filter-name__detail"])[10]');
    this.leftButtonInTheCarousel = page.locator('[class="icon icon-arrow-left"]');
    this.rightButtonInTheCarousel = page.locator('[class="slick-next slick-arrow"]');
    this.expectedIfUseLeftButtonInTheCarusel = page.locator('(//h3[contains(text(),"Thetan Arena")])[1]');
    this.expectedIfUseRightButtonInTheCarusel = page.locator('(//h3[contains(text(),"Splinterlands")])[1]');
    this.readMoreButton = page.locator('(//a[text()="Read More "])');
    this.readLessButton = page.locator('(//a[text()="Read Less "])');
    this.expectResultIfClosedAdditionalInfo = page.locator('(style="display: none;")');
    this.chainColumnExpect = page.locator('(//div[@class="filter-name__detail full"]) [1]');
  }

  async selectChainFilterByName(text) {
    let chainFilterOption = this.page.locator(`[data-cat="${text}"]`.toLowerCase());
    await chainFilterOption.click();
    await this.page.waitForLoadState();
  }

  async checkThatTheChaineFiltered(name: string) {
    const rows = this.page.locator('[data-label="Chain"]');
    const texts = await rows.allTextContents();

    for (const chain of texts) {
      expect(chain).toContain(name);
    }
  }

  async showDropdown(value) {
    await this.dropdownShowInTheTable.click();
    await this.dropdownShowInTheTable.selectOption(value);
  }

  async selectSort(text) {
    let sortOption = this.page.locator(`[aria-label="${text}: activate to sort column ascending"]`);
    await sortOption.click();
  }

  async checkThatTheSorted(text) {
    const rows = this.page.locator(`(//td[text()="${text}"])`);
    const texts = await rows.allTextContents();

    for (const chain of texts) {
      expect(chain).toContain(name);
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
    await this.page.waitForLoadState();
  }

  async clickReadLessButton() {
    await this.readLessButton.click();
    await this.page.waitForLoadState();
  }

  async clickFAQsButtons(text) {
    let faqsOption = this.page.locator(`(//h3[text()="${text}"])`);
    await faqsOption.click();
  }

  async checkFaqBlockDisplayState(name: string) {
    let expectedFunction = await this.expectResultIfClosedAdditionalInfo.getAttribute('display');
    expect(expectedFunction).toBe(name)
  }
}
