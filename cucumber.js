const common = {
  requireModule: ["ts-node/register"],
  require: ["cucumber/world.ts", "cucumber/steps/**/*.ts"],
};

module.exports = {
  default: {
    ...common,
    tags: "not @wip",
    order: "random",
    parallel: 5,
    format: ["html:reports/cucumber-report.html"],
  },
  wip: {
    ...common,
    tags: "@wip",
    format: ["@cucumber/pretty-formatter"],
  },
};
