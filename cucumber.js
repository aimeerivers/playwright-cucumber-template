const common = [
  '--require-module ts-node/register',
  '--require step-definitions/**/*.ts',
].join(' ');

module.exports = {
  default: common,
};
