import type { Locator, Page } from 'playwright';

export class ButtonPage {
  constructor(private readonly page: Page) {}

  async button(): Promise<Locator> {
    return this.page.locator('.button-pushable');
  }

  async makeButtonLink(): Promise<Locator> {
    return this.page.getByRole('link', { name: 'Make your own button' });
  }
}
