import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class NFTgamesPage extends WebPage {
  readonly expectIfUseSortByName: Locator;
  readonly expectIfUseSortByChain: Locator;
  readonly expectIfUseSortByCategory: Locator;
  readonly expectIfUseSortByPrice: Locator;
  readonly expectIfUseSortByMarketCap: Locator;
  readonly expectIfUseSortByVolume: Locator;
  readonly expectIfUseSortByChange: Locator;
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

  constructor(page: Page) {
    super(page);
    this.expectIfUseSortByName = page.locator('//h3[contains(text(),"A")]');
    this.expectIfUseSortByChain = page.locator('//td[contains(text(),"A")]');
    this.expectIfUseSortByCategory = page.locator('//td[contains(text(),"C")]');
    this.expectIfUseSortByPrice = page.locator('//td[contains(text()," ")]');
    this.expectIfUseSortByMarketCap = page.locator('//td[contains(text()," ")]');
    this.expectIfUseSortByVolume = page.locator('//td[contains(text()," ")]');
    this.expectIfUseSortByChange = page.locator('//td[contains(text()," ")]');
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
    this.readMoreButton = page.locator('[class="icon icon-angle-down"]');
    this.readLessButton = page.locator('[class="icon icon-angle-down"]');
    this.expectReadMoreOrLessWhatIsNFTgamingText = page.locator('text=NFT gaming is playing NFT games');
    this.expectReadMoreHowDoIEarnMoneyThroughNFTgamingText = page.locator('text=For most NFT games out there');
    this.expectReadMoreOrLessHowManyNFTgamesAreThereText = page.locator('text=There are tons of different NFT games');
    this.expectReadMoreOrLessCanIearnMoneyThroughNFTgamingText = page.locator('text=Yes, you can earn money through NFT gaming');
  }

  async selectChainFilterByName(text) {
    let chainFilterOption = this.page.locator(`[data-cat="${text}"]`);
    await chainFilterOption.click();
  }

  async showDropdown(text) {
    let showDropdownOption = this.page.locator(`//select[@name="DataTables_Table_0_length"]//option[value="${text}"]`);
    await showDropdownOption.click();
  }

  async selectSort(text) {
    let sortOption = this.page.locator(`[aria-label="${text}: activate to sort column ascending"]`);
    await sortOption.click();
  }

  async expectSelectedChainFilterByName(text) {
    let filteredChain = this.page.locator(`//td[contains(text(),"${text}"]`);
    await filteredChain;
  }

  async clickReadMoreButtons(text) {
    let readMoreOption = this.page.locator(`text=${text}`);
    await readMoreOption.click();
  }

  async clickFAQsButtons(text) {
    let faqsOption = this.page.locator(`text=${text}`);
    await faqsOption.click();
  }

}
