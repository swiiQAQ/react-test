var autoprefixer = require('autoprefixer')
// var definePlugin = new webpack.DefinePlugin({
//     __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
//     __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
// });
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    // cache: true,
    entry: __dirname + '/views/index.js' ,
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
        autoprefixer
    ]
};