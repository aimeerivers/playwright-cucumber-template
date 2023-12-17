import assert from 'node:assert';

import { Given, Then, When } from '@cucumber/cucumber';

Given('a user is on the button page', async function () {
  await this.page.goto('/push-the-button');
});

When(
  'they make their own button saying {string}',
  async function (newText: string) {
    await (await this.buttonPage.makeButtonLink()).click();
    await (await this.editButtonPage.labelTextarea()).fill(newText);
    await (await this.editButtonPage.createButtonButton()).click();
  }
);

When('they make their own button saying some random text', async function () {
  this.randomText = Math.random().toString(36).substring(2);
  await (await this.buttonPage.makeButtonLink()).click();
  await (await this.editButtonPage.labelTextarea()).fill(this.randomText);
  await (await this.editButtonPage.createButtonButton()).click();
});

Then(
  'they should see a button saying {string}',
  async function (expectedText: string) {
    const actualText = await (await this.buttonPage.button()).innerText();
    assert.equal(actualText, expectedText);
  }
);

Then('they should see a button updated to the right text', async function () {
  const actualText = await (await this.buttonPage.button()).innerText();
  assert.equal(actualText, this.randomText);
});
