const propertiesOrder = require('stylelint-config-xo/properties-order');

module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-css-modules',
    'stylelint-config-recommended-scss',
    'stylelint-config-xo-scss',
    'stylelint-config-xo-space',
    'stylelint-config-prettier',
  ],
  rules: {
    // 'order/properties-order' is disabled in 'stylelint-config-xo' for now.
    // See https://github.com/sindresorhus/stylelint-config-xo/pull/2#issuecomment-363438756.
    'order/properties-order': propertiesOrder,
    // Use `scss/at-rule-no-unknown` instead of `at-rule-no-unknown` for SCSS.
    // See https://github.com/kristerkari/stylelint-scss/blob/HEAD/src/rules/at-rule-no-unknown/README.md.
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // Because it is buggy, it turns off for now.
    'block-no-empty': null,
  },
};
