import type { Locator, Page } from 'playwright';

export class ProductPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async productList(): Promise<Locator> {
    return this.page.locator('.productlist-onerow__wrap').first();
  }
}
