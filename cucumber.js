const common = [
  "--require-module ts-node/register",
  "--require cucumber/world.ts",
  "--require cucumber/steps/**/*.ts",
].join(" ");

module.exports = {
  default: common,
};
