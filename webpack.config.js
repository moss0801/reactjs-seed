module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        // tell webpack to use babel for all *.js files
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}