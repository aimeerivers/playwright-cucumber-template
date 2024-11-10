const common = {
  loader: ["ts-node/esm"],
  import: ["cucumber/world.ts", "cucumber/**/*.ts"],
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
