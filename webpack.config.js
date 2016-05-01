var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    // minimize: true
    // }),
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ]
};
