import { Page } from 'playwright';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    await this.page.getByLabel('OK TIL ALLE', { exact: true }).click();
  }

  async clickCategory(category: string) {
    await this.page.getByLabel('Kategori').getByRole('link', { name: category, exact: true }).click();
  }
}
