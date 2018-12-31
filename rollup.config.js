import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        name: 'main',
        sourcemap: true
    },
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs({
            namedExports: {
                'babylonjs': [ 'BABYLON', 'Engine', 'Scene', 'ArcRotateCamera', 'HemisphericLight', 'PointLight', 'MeshBuilder', 'Vector3'],
                'cannon': [ 'cannon'],
                'earcut': ['earcut'],
                'oimo': ['cannon']
            }
        }), // converts date-fns to ES modules
        production && terser() // minify, but only in production
    ]
};