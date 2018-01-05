var autoprefixer = require('autoprefixer');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config/server.config.js');
var pathLib = require('path');
var ROOT_PATH = pathLib.resolve(__dirname);
var ENTRY_PATH = pathLib.resolve(ROOT_PATH, 'views');
var webpack = require("webpack")
// var definePlugin = new webpack.DefinePlugin({
//     __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
//     __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
// });
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// console.log(pathLib.resolve(ENTRY_PATH, 'index.js'));
module.exports = {
    // cache: true,
    // entry: __dirname + '/views/index.js' ,
    entry:{
        index: [
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?path=http://${config.host}:${config.port}/__webpack_hmr`,
            pathLib.resolve(ENTRY_PATH, 'index.js')
        ],
        // vendor: ['react', 'react-dom', 'react-router-dom']
    },
    
    output: { path: __dirname + '/public/build', filename: 'bundle.js' },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                use: ['awesome-typescript-loader']
            },
            {
                test: /(\.(jsx|js)?$)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015","react"]
                    },
                    // exclude: './node_modules/'
                }
            },
            {
                test: /(\.(scss|css)?$)/,
                // use: ['style-loader','css-loader','sass-loader','postcss-loader']
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
                            plugins: function(){
                                return [autoprefixer]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)?$/,
                use: ['url-loader']
            },  
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json','.css','.scss','.jsx']
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        autoprefixer,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "React",
            showErrors: true,
        }),
        new OpenBrowserPlugin({
            url: `http://${config.host}:${config.port}`
        }),
        
    ]
};