const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => ({
  mode: env.prod ? 'production' : 'development',
  entry: path.resolve(
    __dirname,
    env.prod ? 'src/colorbomb.js' : 'sandbox/sandbox.js',
  ),
  target: 'web',
  output: env.prod
    ? {
        path: path.resolve(__dirname, 'dist'),
        library: 'colorbomb',
        libraryExport: 'default',
        libraryTarget: 'umd',
        filename: 'colorbomb.js',
      }
    : {},
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, './sandbox'),
    port: 9001,
    public: 'http://localhost:9001',
  },
  optimization: {
    minimize: !!env.prod,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: !env.prod
    ? [
        new MiniCssExtractPlugin({filename: 'colorbomb.css'}),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'sandbox/index.ejs'),
          title: 'Color Bomb Sandbox',
        }),
      ]
    : [],
})
