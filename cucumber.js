const common = {
  requireModule: ["ts-node/register"],
  require: ["cucumber/world.ts", "cucumber/steps/**/*.ts"],
};

module.exports = {
  default: {
    ...common,
    tags: "not @wip",
    parallel: 5,
  },
  wip: {
    ...common,
    tags: "@wip",
    format: ["@cucumber/pretty-formatter"],
  },
};
