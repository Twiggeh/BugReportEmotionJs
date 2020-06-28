const path = require('path');
require('dotenv').config();
const mode = process.env.NODE_ENV;
console.log(mode);

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src')],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/js/',
    filename: 'bundle.js',
  },
  mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: [{ loader: 'eslint-loader' }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
            query: { presets: ['@babel/preset-react'] },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      GConfig$: path.resolve(__dirname, 'config/global.js'),
    },
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: './public',
    compress: true,
  },
  node: { __dirname: true, __filename: true }, // to get correct __dirname and __filename
};
