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
  plugins: ['import', 'promise', 'react', 'jsx-a11y', 'unicorn'],
  extends: [
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended',
    'xo-space/esnext',
    'xo-react/space',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
  ],
  rules: {
    'import/order': ['error', {'newlines-between': 'always'}],
    // Which do you like `"foo"` or `&quot;foo&quot`? -- Of course I like the first!
    // Actually there is no reason to use the second. It is UTF-8 age now.
    'react/no-unescaped-entities': 'off',
    // This is tooo strict rule. Be quiet!
    'unicorn/prevent-abbreviations': 'off',
  },
};
