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
    await this.page.waitForTimeout(10);
    await (await this.editButtonPage.createButtonButton()).click();
  }
);

Then(
  'they should see a button saying {string}',
  async function (expectedText: string) {
    const actualText = await (await this.buttonPage.button()).innerText();
    assert.equal(actualText, expectedText);
  }
);
