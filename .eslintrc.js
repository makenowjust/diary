module.exports = {
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
  ],
  rules: {
    'import/order': ['error', {'newlines-between': 'always'}],
  },
};
