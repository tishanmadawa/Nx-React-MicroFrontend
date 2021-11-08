const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (configVal, context) => {
    // var configVal = webpackNx(config);
    configVal.context = process.cwd();
    configVal.optimization.runtimeChunk = false
    // // console.log(config);
    // configVal.mode = 'development';
    // configVal.devServer = {
    //     // port: 4201,
    //     historyApiFallback: {
    //         index: "/index.html"
    //     }
    // };
    configVal.plugins.push(new ModuleFederationPlugin({
        name: 'remote',
        filename: 'remoteEntry.js',
        exposes: {
            './MarketingApp': './apps/remote/src/index.js'
        },
        shared: []
    }));
    // configVal.plugins.push(new HtmlWebpackPlugin({
    //     template: './apps/remote/src/index.html'
    // }))
    // configVal.optimization.splitChunks = {
    //     cacheGroups: {
    //         default: false,
    //     },
    // };
    // configVal.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 1
    // }));
    configVal.output.publicPath = 'http://localhost:4201/';
    // configVal.output.path = path.resolve(__dirname, 'dist');
    // console.log(configVal);
    return configVal
}

