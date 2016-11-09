let webpack = require('webpack')
let path = require('path')

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css?module&localIdentName=[hash:base64:5]&-url'
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  devtool: 'source-map'
}
