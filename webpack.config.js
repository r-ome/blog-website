const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/template.html' }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    open: true,
  },
};
