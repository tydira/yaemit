const { join } = require('path');
const { UglifyJsPlugin } = require('webpack').optimize;

const libraryName = 'yaemit';
const plugins = [];
let extension = '.js';

if (process.env.NODE_ENV === 'prod') {
  extension = '.min.js';
  plugins.push(new UglifyJsPlugin());
}

module.exports = {
  plugins,
  entry: join(__dirname, `src/emitter.js`),
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: join(__dirname, 'lib'),
    filename: `${libraryName}${extension}`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
