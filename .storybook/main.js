const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    // transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!.*(gatsby)\/)/];

    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries'),
    );

    // Transpile SCSS into CSS.
    config.module.rules.push({
      oneOf: [
        {
          test: /\.module\.scss$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: {
                  exportLocalsConvention: 'camelCaseOnly',
                  namedExport: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 1,
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

    return config;
  },
};
