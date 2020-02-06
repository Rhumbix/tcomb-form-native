import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default [
    {
        input: [
            'index.js'
        ],
        output: [
            { dir: 'dist', format: 'cjs' }
        ],
        plugins: [
            resolve(),
            babel({
                exclude: ['node_modules/**']
            })
        ]
    }
]