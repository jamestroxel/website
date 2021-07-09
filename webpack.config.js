const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

module.exports = {
    entry: [path.join(dirApp, 'index.js'), path.join(dirStyles, 'index.scss')],
    resolve: {
        resolve: {
            modules: [dirApp, dirShared, dirStyles, dirNode]
          },
        // alias: {
        //   '@': path.resolve(__dirname, './src'),
        //   '~': path.resolve(__dirname, './src/styles'),
        // }
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
                loader: 'file-loader',
                options: {
                  name (file) {
                    return '[hash].[ext]'
                  }
                }
              },
            {
                test: /\.sass$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      additionalData: "@import '@/styles/utils/variables.scss'"
                    },
                  },
                ],
              },
              // SCSS has different line endings than SASS
              // and needs a semicolon after the import.
              {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {

                      additionalData: "@import '@/styles/utils/variables.scss';"
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEVELOPMENT
          }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: './shared', to: '' }]
          }),
          new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
    ],  
    devServer: {
        historyApiFallback: true,
    },
    
};