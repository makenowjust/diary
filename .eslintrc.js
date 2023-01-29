module.exports = {
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '16.7.0',
    },
  },
  plugins: ['import', 'promise', 'react', 'jsx-a11y', 'unicorn', 'jest'],
  extends: [
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended',
    'xo-space',
    'xo-react/space',
    'prettier',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    // Which do you like `"foo"` or `&quot;foo&quot`? -- Of course I like the first!
    // Actually there is no reason to use the second. It is UTF-8 age now.
    'react/no-unescaped-entities': 'off',
    // This is tooo strict rule. Be quiet!
    'unicorn/prevent-abbreviations': 'off',
    // This rule conflicts prettier unfortunately.
    'unicorn/no-nested-ternary': 'off',
    // This rule is not useful within framework.
    'unicorn/no-null': 'off',
    // Because GatsbyJS is legacy for now.
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-top-level-await': 'off',
    // 'data' and 'pageContext' is props defined by GatsbyJS,
    // and it is hard to add `propTypes` to some components required by GatsbyJS (e.g. `Head`).
    'react/prop-types': ['error', {ignore: ['data', 'pageContext']}],
  },
};
