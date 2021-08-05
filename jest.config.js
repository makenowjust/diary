module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: [
    'node_modules/(?!.*(?:gatsby|react-syntax-highlighter|strip-markdown)/)',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/.jest/loader-shim.js', '<rootDir>/.jest/register-context.js'],
};
