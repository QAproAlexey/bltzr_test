import { Locator, Page, expect } from '@playwright/test';

import { WebPage } from './webPage';

export class NFTgamesPage extends WebPage {
  readonly paginationCurrentbutton: Locator;
  readonly dropdownShowInTheTable: Locator;
  readonly leftButtonInTheCarusel: Locator;
  readonly rightButtonInTheCarusel: Locator;
  readonly expectedIfUseLeftButtonInTheCarusel: Locator;
  readonly expectedIfUseRightButtonInTheCarusel: Locator;
  readonly readMoreButton: Locator;
  readonly readLessButton: Locator;
  readonly expectWhatIsNFTgaming: Locator;
  readonly expectHowDoIEarnMoneyThroughNFTgaming: Locator;
  readonly expectHowManyNFTgamesAreThere: Locator;
  readonly expectCanIEarnMoneyThroughNFTgaming: Locator;

  constructor(page: Page) {
    super(page);
    this.paginationCurrentbutton = page.locator('[class="paginate_button current"]');
    this.dropdownShowInTheTable = page.locator('select[name="DataTables_Table_0_length"]');
    this.leftButtonInTheCarusel = page.locator('[class="icon icon-arrow-left"]');
    this.rightButtonInTheCarusel = page.locator('[class="slick-next slick-arrow"]');
    this.expectedIfUseLeftButtonInTheCarusel = page.locator('(//h3[contains(text(),"Thetan Arena")])[1]');
    this.expectedIfUseRightButtonInTheCarusel = page.locator('(//h3[contains(text(),"Splinterlands")])[1]');
    this.readMoreButton = page.locator('(//a[text()="Read More "])');
    this.readLessButton = page.locator('(//a[text()="Read Less "])');
    this.expectWhatIsNFTgaming = page.locator('(//p[contains(text(),"NFT gaming is playing NFT games that offer")])');
    this.expectHowDoIEarnMoneyThroughNFTgaming = page.locator('(//p[contains(text(),"For most NFT games out there, you need to play to earn money")])');
    this.expectHowManyNFTgamesAreThere = page.locator('(//p[contains(text(),"There are tons of different NFT games out there")])');
    this.expectCanIEarnMoneyThroughNFTgaming = page.locator('(//p[contains(text(),"Yes, you can earn money through NFT gaming")])');
  }

  async selectAmountInshowDropdown(value) {
    await this.dropdownShowInTheTable.click();
    await this.dropdownShowInTheTable.selectOption(value);
  }

  async checkIfAmountInShowDropdownSelected(amount: string) {
    let allElements = this.page.locator('[data-label="Name"]');
    let row = await allElements.count();
    expect(String(row)).toBe(amount);
  }

  async selectChainFilterByName(text) {
    let chainFilterOption = this.page.locator(`[data-cat="${text}"]`.toLowerCase());
    await chainFilterOption.click();
  }

  async checkThatTheChaineFiltered(name: string) {
    let rows = this.page.locator('[data-label="Chain"]');
    let texts = await rows.allTextContents();

    for (const chain of texts) {
      expect(chain).toContain(name);
    }
  }

  // async selectSort(text) {
  //   let sortOption = this.page.locator(`[aria-label="${text}: activate to sort column ascending"]`);
  //   await sortOption.click();
  // }

  // async checkThatTheSorted(text) {
  //   const rows = this.page.locator(`(//td[text()="${text}"])`);
  //   const texts = await rows.allTextContents();

  //   for (const chain of texts) {
  //   expect(chain).toContain(name);
  //   }
  // }

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

}
