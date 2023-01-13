module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/$1`,
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: [
    'src/utils/markdown-to-text.js$|node_modules/(?!.*(?:bail|character-entities|decode-named-character-reference|is-plain-obj|gatsby|gatsby-script|longest-streak|mdast.*|micromark.*?|parse-entities|react-syntax-highlighter|trough|remark.*|unified.*|unist.*|vfile.*|zwitch)/)',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  setupFiles: ['<rootDir>/.jest/loader-shim.js', '<rootDir>/.jest/register-context.js'],
};
