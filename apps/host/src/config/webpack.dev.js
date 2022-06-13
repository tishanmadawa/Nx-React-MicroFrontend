const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const nrwlConfig = require('@nrwl/react/plugins/webpack');
const deps = require('../../../../package.json').dependencies;
const env = require('../../../../environments/environment.ts')


module.exports = (configVal, context) => {
    configVal.context = process.cwd();
    nrwlConfig(configVal);
    configVal.optimization.runtimeChunk = false;
    var remotesList = {};
    if (context.configuration == 'production') {
        remotesList = {
            marketing: `remote@https://${env.prod}/remoteEntry.js`
        }
    } else {
        remotesList = {
            marketing: 'remote@//localhost:4201/remoteEntry.js'
        }

    }
    return {
        ...configVal,
        plugins: [
            ...configVal.plugins,
            new ModuleFederationPlugin({
                name: 'host',
                remotes: remotesList,
                // shared: {
                //     ...deps
                // }

            }),
        ],
    };
}
