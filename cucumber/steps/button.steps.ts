import assert from 'node:assert';

import { Given, Then, When } from '@cucumber/cucumber';
import { faker } from '@faker-js/faker';
import type { Page } from 'playwright';

import type { ButtonPage } from '../pages/button.page';
import type { EditButtonPage } from '../pages/edit-button.page';
import type CustomWorld from '../world';

interface World extends CustomWorld {
  buttonPage: ButtonPage;
  editButtonPage: EditButtonPage;
  randomText: string;
  page: Page;
}

Given('a user is on the button page', async function (this: World) {
  await this.buttonPage.visit();
});

When(
  'they make their own button saying {string}',
  async function (this: World, newText: string) {
    await (await this.buttonPage.makeButtonLink()).click();
    await (await this.editButtonPage.labelTextarea()).fill(newText);
    await this.page.waitForTimeout(10);
    await (await this.editButtonPage.createButtonButton()).click();
  }
);

When(
  'they make their own button saying some random text',
  async function (this: World) {
    this.randomText = faker.word.words(3);
    await (await this.buttonPage.makeButtonLink()).click();
    await (await this.editButtonPage.labelTextarea()).fill(this.randomText);
    await this.page.waitForTimeout(10);
    await (await this.editButtonPage.createButtonButton()).click();
  }
);

Then(
  'they should see a button saying {string}',
  async function (this: World, expectedText: string) {
    const actualText = await (await this.buttonPage.button()).innerText();
    assert.equal(actualText, expectedText);
  }
);

Then(
  'they should see a button updated to the right text',
  async function (this: World) {
    const actualText = await (await this.buttonPage.button()).innerText();
    assert.equal(actualText, this.randomText);
  }
);
