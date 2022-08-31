import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class NFTgamesPage extends WebPage {
  readonly paginationNextButton: Locator;
  readonly paginationPreviousButton: Locator;
  readonly pagination1button: Locator;
  readonly pagination2button: Locator;
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
  readonly expectReadMoreOrLessWhatIsNFTgamingText: Locator;
  readonly expectReadMoreHowDoIEarnMoneyThroughNFTgamingText: Locator;
  readonly expectReadMoreOrLessHowManyNFTgamesAreThereText: Locator;
  readonly expectReadMoreOrLessCanIearnMoneyThroughNFTgamingText: Locator;
  readonly chainColumnExpect: Locator;

  constructor(page: Page) {
    super(page);
    this.paginationNextButton = page.locator('[class="paginate_button next"]');
    this.paginationPreviousButton = page.locator('[class="paginate_button previous"]');
    this.pagination1button = page.locator('[data-dt-idx="1"]');
    this.pagination2button = page.locator('[data-dt-idx="2"]');
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
    this.readMoreButton = page.locator('(//a[contains(text(),"Read More ")])');
    this.readLessButton = page.locator('(//a[contains(text(),"Read Less ")])');
    this.expectReadMoreOrLessWhatIsNFTgamingText = page.locator('(//h3[contains(text(),"NFT gaming is playing NFT games")])');
    this.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText = page.locator('(//h3[contains(text(),"For most NFT games out there")])');
    this.expectReadMoreOrLessHowManyNFTgamesAreThereText = page.locator('(//h3[contains(text(),"There are tons of different NFT games")])');
    this.expectReadMoreOrLessCanIearnMoneyThroughNFTgamingText = page.locator('(//h3[contains(text(),"Yes, you can earn money through NFT gaming")])');
    this.chainColumnExpect = page.locator('//td[@data-label="Chain"]');
  }

  async selectChainFilterByName(text) {
    let chainFilterOption = this.page.locator(`[data-cat="${text}"]`.toLowerCase());
    await chainFilterOption.click();
  }

  async checkThatChainFilterByNameChosen(text) {
    let chainColumnOption = this.page.$(`//td[@data-label="Chain"]`);
    await chainColumnOption.toContainText(text);
  }

  async showDropdown(value) {
    await this.dropdownShowInTheTable.click();
    await this.dropdownShowInTheTable.selectOption(value);
  }

  async selectSort(text) {
    let sortOption = this.page.locator(`[aria-label="${text}: activate to sort column ascending"]`);
    await sortOption.click();
  }

  async clickReadMoreButton() {
    await this.readMoreButton.click();
    expect(await this.readLessButton).toBeVisible();
  }

  async clickReadLessButton() {
    await this.readLessButton.click();
    expect(await this.readMoreButton).toBeVisible();
  }

  async clickFAQsButtons(text) {
    let faqsOption = this.page.locator(`text=${text}`);
    await faqsOption.click();
  }

}
