import assert from 'node:assert';

import { After, Before, Given, Then, When } from '@cucumber/cucumber';

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});

Given('a user is on the home page', async function () {
  await this.page.goto('https://nemlig.com');
  await this.homePage.acceptCookies();
});

When('they click on the {string} category', async function (category: string) {
  await this.homePage.clickCategory(category);
});

Then(
  'they should end up on the {string} page',
  async function (heading: string) {
    const actualHeading = await this.page
      .getByRole('heading', { name: heading })
      .innerText();
    assert.equal(
      actualHeading,
      heading,
      `Expected heading to be '${heading}', but it was '${actualHeading}'`
    );
  }
);

Then('they should see a list of products', async function () {
  assert(
    await (await this.productPage.productList()).isVisible(),
    'Product list is not visible'
  );
});
