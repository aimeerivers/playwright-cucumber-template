const common = {
  loader: ["ts-node/esm"],
  import: ["features/world.ts", "features/**/*.ts"],
};

export default {
  default: {
    ...common,
    tags: "not @wip",
    order: "random",
    parallel: 5,
    retry: 1,
    format: ["html:reports/cucumber-report.html"],
  },
  wip: {
    ...common,
    tags: "@wip",
    format: ["@cucumber/pretty-formatter"],
  },
};
