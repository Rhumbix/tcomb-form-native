import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import pkg from "./package.json"

export default [
    {
        input: [
            "lib/index.js",
            "lib/components.js",
            "lib/util.js"
        ],
        external: ["ms"],
        output: [
            { dir: "dist", format: "cjs" }
        ],
        plugins: [
            resolve(),
            babel({
                // exclude: ["node_modules/**"]
            })
        ]
    }
]
