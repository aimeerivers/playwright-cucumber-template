import type { IWorldOptions } from '@cucumber/cucumber';
import {
  setDefaultTimeout,
  setWorldConstructor,
  World,
} from '@cucumber/cucumber';
import type { Browser, Page } from 'playwright';
import { chromium } from 'playwright';

import { HomePage } from './pages/home.page';
import { ProductPage } from './pages/product.page';

setDefaultTimeout(10 * 1000);

export default class CustomWorld extends World {
  browser: Browser | null;
  page: Page | null;
  homePage: HomePage | null;
  productPage: ProductPage | null;

  constructor(options: IWorldOptions<unknown>) {
    super(options);
    this.browser = null;
    this.page = null;
    this.homePage = null;
    this.productPage = null;
  }

  async openBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
    this.homePage = new HomePage(this.page);
    this.productPage = new ProductPage(this.page);
  }

  async closeBrowser(): Promise<void> {
    if (this.browser !== null) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
