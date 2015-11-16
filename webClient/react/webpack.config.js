/**
 * Created by ben on 15/11/14.
 */
var webpack = require('webpack'),
    path    = require('path'),
    srcPath = path.join(__dirname , "src"),
    distPath= path.join(__dirname , "../static/js/"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var envPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
});
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    context: srcPath,
    entry: {
        module: path.join(srcPath, 'webClient.js'),
        common: ['react', 'react-router', 'alt']
    },
    output: {
        path: distPath,
        filename: 'webClient.js',
        publicPath: '/js/'
    },
    resolve:{
        root: srcPath,
        modulesDirectories: ["node_modules", "src"],
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [envPlugin, commonsPlugin]
}