const webpack = require('webpack')
var path = require('path')

const vendors = [
  'react',
  'react-dom',
  'react-router',
  'babel-polyfill',
  'react-dnd',
  'react-dnd-html5-backend',
  'react-bootstrap'
  // ...其它库
]

module.exports = {
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    'lib': vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
