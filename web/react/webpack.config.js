/**
 * Created by ben on 15/11/14.
 */
var webpack = require('webpack'),
    path    = require('path'),
    srcPath = path.join(__dirname , "src"),
    distPath= path.join(__dirname , "../static/js/"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var isDev = JSON.parse(process.env.BUILD_DEV || 'false');

var Plugins = [
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(isDev),
    }),
    new webpack.optimize.CommonsChunkPlugin((isDev) ? 'common.js' : 'common.min.js'),
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
];

if (!isDev) {
    Plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        }),
        new webpack.optimize.DedupePlugin()
    );
}

module.exports = {
    context: srcPath,
    entry: {
        module: path.join(srcPath, 'webClient.js'),
        common: ['react', 'react-router', 'alt']
    },
    output: {
        path: distPath,
        filename: (isDev) ? "webClient.js" : "webClient.min.js",
        publicPath: '/js/'
    },
    resolve:{
        root: srcPath,
        modulesDirectories: ["node_modules", "src"]
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: Plugins
}