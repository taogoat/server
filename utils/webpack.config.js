var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client?reload=true',
          './src/core/client/index.js'
  ],

  output: {
    path: __dirname + '/src/public/',
    filename: 'index.js',
    publicPath: '',
  },

  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'css-loader'
    },{
      test: /\.svg$/,
      loader: 'raw-loader'
    },{
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ]
}
