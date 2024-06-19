module.exports = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-scss'],
  extends: ['stylelint-config-css-modules', 'stylelint-config-recommended-scss'],
  rules: {
    'function-no-unknown': null,
    // Use `scss/at-rule-no-unknown` instead of `at-rule-no-unknown` for SCSS.
    // See https://github.com/kristerkari/stylelint-scss/blob/HEAD/src/rules/at-rule-no-unknown/README.md.
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // Because it is buggy, it turns off for now.
    'block-no-empty': null,
    // Fix stylelint-config-xo-scss bug.
    'scss/at-import-partial-extension': 'never',
  },
};
