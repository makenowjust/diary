const babelOptions = {
  presets: [require.resolve('babel-preset-gatsby')],
  plugins: [require.resolve('babel-plugin-require-context-hook')],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
