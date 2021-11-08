const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const nrwlConfig = require('@nrwl/react/plugins/webpack');


module.exports = (configVal, context) => {
    configVal.context = process.cwd();
    nrwlConfig(configVal);
    configVal.optimization.runtimeChunk = false
    return {
        ...configVal,
        plugins: [
            ...configVal.plugins,
            new ModuleFederationPlugin({
                name: 'host',
                remotes: {
                    marketing: 'remote@//localhost:4201/remoteEntry.js',
                },
                shared: []
                // shared: {
                //     react: { singleton: true, eager: true },
                //     'react-dom': { singleton: true, eager: true },
                // },
            }),
        ],
    };
}
