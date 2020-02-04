module.exports = function(api) {
    const isTest = api.env('test')

    // Cache based on environment
    api.cache.using(() => process.env.NODE_ENV)

    const targets = isTest ? { node: 'current' } : 'last 2 versions, ie 11'

    const presets = [
        // Import core-js and regenerator-runtime in index.jsx to
        // auto-include required polyfills
        [
            '@babel/preset-env',
            {
                corejs: 3,
                modules: false,
                targets: targets,
                useBuiltIns: 'entry'
            }
        ]
    ]

    let plugins = []

    if (isTest) {
        // Transpile modules to commonjs format
        plugins.push('@babel/plugin-transform-modules-commonjs')
        // Support dynamic import statements
        plugins.push('@babel/plugin-syntax-dynamic-import')
        plugins.push('dynamic-import-node')
    }

    return {
        presets,
        plugins
    }
}
