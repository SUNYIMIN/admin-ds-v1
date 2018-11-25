/*
 * @Author: sunyimin 
 * @Date: 2018-11-25 18:14:09 
 * @Last Modified by: sunyimin
 * @Last Modified time: 2018-11-25 20:35:16
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //该插件为您生成一个html文件
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  //绝对路径
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  //自定义一个html模版
    })
  ]
};
