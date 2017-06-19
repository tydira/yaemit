const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/emitter.js',

  output: {
    library: 'yaemit',
    libraryTarget: 'umd',
    path: path.resolve('dist'),
    filename: 'yaemit.min.js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('src'),
    ],
  },

  module: {
    loaders: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: [path.resolve('node_modules')],
      }
    ],
  },
}
