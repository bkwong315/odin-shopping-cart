const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { argv } = require('process');

module.exports = (argv) => {
  let config = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 8000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    devtool: argv.mode === 'development' ? 'inline-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(ts|tsx)x$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: './public/', to: '' }],
      }),
      new HtmlWebpackPlugin({
        fileName: 'index.html',
        title: 'Shop Name',
        templateContent: ({ htmlWebpackPlugin }) => `<html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta charset="utf-8" />
              <title>${htmlWebpackPlugin.options.title}</title>
            </head>
            <body>
              <div class='root'></div>
            </body>
          </html>`,
      }),
    ],
  };

  return config;
};
