import { Page } from 'playwright';

export class ProductPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async productList() {
    return this.page.locator('.productlist-onerow__wrap').first();
  }
}
