const common = [
  '--require-module ts-node/register',
  '--require cucumber/steps/**/*.ts',
].join(' ');

module.exports = {
  default: common,
};
