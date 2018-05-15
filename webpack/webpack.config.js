const HtmlWebpackPlugin = require('Html-webpack-plugin');

module.exports = {
  entry: './src/js/index',
  output: {
    filename: 'main.[chunkhash].js'
  },
  // devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
