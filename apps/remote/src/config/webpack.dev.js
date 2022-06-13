const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const deps = require('../../../../package.json').dependencies;
const nrwlConfig = require('@nrwl/react/plugins/webpack');

module.exports = (configVal, context) => {
    configVal.context = process.cwd();
    nrwlConfig(configVal);
    configVal.optimization.runtimeChunk = false;


    configVal.plugins.push(new ModuleFederationPlugin({
        name: 'remote',
        filename: 'remoteEntry.js',
        exposes: {
            './MarketingApp': './apps/remote/src/index.js'
        },
        // shared: { ...deps }
    }));

    if (context.configuration == 'production') {
        configVal.output.publicPath = `https://${env.prod}/remote/`;
    } else {
        configVal.output.publicPath = 'http://localhost:4201/';
    }

    return configVal
}

