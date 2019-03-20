/*
 * @Author: sunyimin 
 * @Date: 2018-11-25 18:14:09 
 * @Last Modified by: sunyimin
 * @Last Modified time: 2019-03-20 14:47:18
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //该插件为您生成一个html文件
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //抽离css文件
const ProgressBarPlugin  = require('progress-bar-webpack-plugin'); //展示打包的进度
const chalk = require('chalk'); //控制台字符样式
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    boundle: './src/entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  //绝对路径
    publicPath: "/dist/",  //所有的资源都在dist的绝对路径下找
    filename: 'js/[name].[chunkhash:8].js'  //应该是文件内容发生了变化，文件后缀的hash才发生变化，防止缓存失效  根绝模块内容是否发生变化计算出hash值
  },
  //路径简写
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers')
    }
  },
  devtool: '#eval-source-map',
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
      //处理css文件
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      //处理scss文件
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      //处理图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "source/[name].[ext]"
            }
          }
        ]
      },
      //处理字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "source/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  //自定义一个html模版
    }),
    new ExtractTextPlugin("css/[name].[chunkhash:8].css"), //抽离css文件
    //抽离公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash:8].js',
    })
  ],
  devServer: {
    port: 8086
    }
};

if(NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }
      ),
      new ProgressBarPlugin({
        format: chalk.yellow(
          '打包中 [:bar] :current/:total :percent :elapseds :msg'
        ),
        complete: '●',
        incomplete: '○',
        width: 20
      }),
    );
}
