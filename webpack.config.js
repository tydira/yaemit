const { resolve } = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',

  output: {
    library: 'proto-es2017',
    libraryTarget: 'umd',
    path: resolve('dist'),
    filename: 'proto-es2017.js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [resolve('node_modules'), resolve('src')],
  },

  module: {
    loaders: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: [resolve('node_modules')],
      },
      {
        use: 'file-loader',
        test: /.*/,
        exclude: [/\.js$/],
      },
    ],
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  devServer: {
    port: 3030,
    contentBase: resolve('src'),
    stats: 'errors-only',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
