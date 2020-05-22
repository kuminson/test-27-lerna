const path = require('path')

console.log(__dirname)

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/fxModule.js'),
  output: {
    path: path.join(__dirname, './dist'),
      filename: '[name]-[hash:7].js'
  },
    devtool: 'source-map'
}