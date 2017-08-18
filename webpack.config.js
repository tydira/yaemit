const { resolve } = require('path')

module.exports = {
  entry: './src/emitter.js',
  context: __dirname,
  devtool: 'source-map',

  output: {
    library: 'yaemit',
    libraryTarget: 'umd',
    path: resolve('lib'),
    filename: 'yaemit.min.js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [resolve('src')],
  },

  module: {
    loaders: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: [resolve('node_modules')],
      },
    ],
  },
}
