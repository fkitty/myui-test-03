const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  mode: 'development', // production   development
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TAQUI',
      template: 'index.html'
    })
  ],
})