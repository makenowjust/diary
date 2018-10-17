module.exports = {
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '16',
    },
  },
  plugins: ['import', 'promise', 'react', 'unicorn'],
  extends: [
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
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
  },
};
