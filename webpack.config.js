var path = require('path'); 
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: './index.js', 
  output:{ 
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module:{
    rules: [
      {test: /\.html$/, use:'html-loader'},
      {test: /\.(js)$/, use:'babel-loader'}, 
      {test: /\.css$/, use:['style-loader', 'css-loader']}
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html' 
    })
  ]
}
