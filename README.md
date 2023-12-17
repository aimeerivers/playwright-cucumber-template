# playwright-cucumber-template

Some examples for running Playwright with Cucumber.

Scenarios written in Gherkin, step definitions in TypeScript.

Includes TSConfig, ESLint and Prettier.

## Getting started

    npm install
    npm run playwright:install

## Writing Cucumber features

- Features are in the `cucumber/features` folder and end with `.feature`
- Step definitions are in the `cucumber/steps` folder and end with `.steps.ts`
- Pages are in the `cucumber/pages` folder and end with `.page.ts`

## Running Cucumber

    npm run cucumber

## Linting and formatting

    npm run lint
    npm run format

- Linting will check for errors and fix formatting in `.ts` and `.js` files.
- Formatting will apply format rules to all possible files.
