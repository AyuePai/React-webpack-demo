var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
        //vendor: ['react', "react-router-dom", "react-dom"]
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash:6].js',
        //chunkFilename: '[name].[id].[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(js|jsx?)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/i, loader: 'url-loader?limit=1000&name=images/[name].[ext]',
                //加载图片 
            },
            { //处理图片外的其他文件类型
                test: /\.(appcache|svg|eot|ttf|woff|woff2|mp3|pdf)(\?|$)/,
                include: path.resolve(__dirname, 'src'),
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        //{ loader: "style-loader" },
                        { loader: "css-loader" },
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: true,
                                javascriptEnabled: true,
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })

            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['./dist']),

    ]
};