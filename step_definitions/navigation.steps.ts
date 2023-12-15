import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import assert from 'node:assert';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

setDefaultTimeout(600 * 1000);

Before(async () => {
  browser = await chromium.launch({headless: false});
});

After(async () => {
  await browser.close();
});

Given('a user is on the home page', async function () {
  page = await browser.newPage();
  await page.goto('https://nemlig.com');
  await acceptCookies();
});

When('they click on the {string} category', async function (category: string) {
  await page.getByLabel('Kategori').getByRole('link', { name: category, exact: true }).click();
});

Then('they should end up on the {string} page', async function (heading: string) {
  await page.getByRole('heading', { name: heading }).waitFor();
});

Then('they should see a list of products', async function () {
  const productList = await page.locator('.productlist-onerow__wrap').first();
  await productList.waitFor();
  
  assert(await productList.isVisible(), 'Product list is not visible');
});

async function acceptCookies() {
  await page.getByLabel('OK TIL ALLE', { exact: true }).click();
}
