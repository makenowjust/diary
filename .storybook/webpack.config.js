const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7).
  defaultConfig.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // Use @babel/preset-react for JSX and env (instead of staged presets).
  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // Use @babel/plugin-proposal-class-properties for class arrow functions.
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
  ];

  // Transpile SCSS into CSS.
  defaultConfig.module.rules.push({
    oneOf: [
      {
        test: /\.module\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('sass-loader'),
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {loader: require.resolve('css-loader'), options: {importLoaders: 1}},
          require.resolve('sass-loader'),
        ],
        include: path.resolve(__dirname, '../src'),
      },
    ],
  });

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint.
  defaultConfig.resolve.mainFields = ['browser', 'module', 'main'];

  return defaultConfig;
};
