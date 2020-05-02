const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env, argv) => ({
  mode: env.prod ? 'production' : 'development',
  entry: env.prod
    ? path.resolve(__dirname, 'src/colorBomb.js')
    : {
      colorBomb: path.resolve(__dirname, 'src/colorBomb.js'),
      sandbox: path.resolve(__dirname, 'sandbox/sandbox.js')
    },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env.prod ? 'colorBomb.js' : '[name].js',
    // library: ['colorBomb', '[name]'],
    // libraryTarget: 'umd',
    // libraryExport: ['default'],
    globalObject: 'this'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './sandbox'),
    port: 9001,
    public: 'http://localhost:9001'
  },
  optimization: {
    minimize: !!env.prod,
    minimizer: [
      new TerserPlugin({ 
        cache: true, 
        parallel: true, 
        terserOptions: { 
          ecma: 5,
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    !env.prod && new MiniCssExtractPlugin({ filename: 'colorBomb.css' }),
    !env.prod && new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'sandbox/index.ejs'),
      title: 'Color Bomb Sandbox',
      // chunks: ['colorBomb', 'sandbox'],
      // chunksSortMode: 'manual'
    })
  ].filter(Boolean)
})