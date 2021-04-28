const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-readme'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.s?css$/,
      loaders: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../scss'),
    });

    /*
      if one want to place css files elsewhere push additional instance of MiniCssExtractPlugin
      with desired file location
      * Note: files will only be generated during production build

      config.plugins.push(new MiniCssExtractPlugin({ filename: '../static/styles/[name].css' }));
    */
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));

    return config;
  },
};
