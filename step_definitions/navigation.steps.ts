import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import assert from 'node:assert';
import { chromium, Browser, Page } from 'playwright';

import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';

let browser: Browser;
let page: Page;
let homePage: HomePage;
let productPage: ProductPage;

setDefaultTimeout(600 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
});

After(async () => {
  await browser.close();
});

Given('a user is on the home page', async function () {
  await page.goto('https://nemlig.com');
  await homePage.acceptCookies();
});

When('they click on the {string} category', async function (category: string) {
  await homePage.clickCategory(category);
});

Then('they should end up on the {string} page', async function (heading: string) {
  const actualHeading = await page.getByRole('heading', { name: heading }).innerText();
  assert.equal(actualHeading, heading, `Expected heading to be '${heading}', but it was '${actualHeading}'`);
});

Then('they should see a list of products', async function () {
  assert(await (await productPage.productList()).isVisible(), 'Product list is not visible');
});
