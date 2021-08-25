import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function webpackConfig(env, argv) {
  return {
    mode: env.prod ? 'production' : 'development',
    entry: path.resolve(
      path.resolve(),
      env.prod ? 'src/colorbomb.js' : 'sandbox/sandbox.js',
    ),
    target: 'web',
    output: env.prod
      ? {
          path: path.resolve(path.resolve(), 'dist'),
          library: 'colorbomb',
          libraryExport: 'default',
          libraryTarget: 'umd',
          filename: 'colorbomb.js',
        }
      : {},
    devServer: {
      open: true,
      port: 9001,
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
            template: path.resolve(path.resolve(), 'sandbox/index.ejs'),
            title: 'Color Bomb Sandbox',
          }),
        ]
      : [],
  }
}
