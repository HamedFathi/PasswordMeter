import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/index.ts",
    output: [{
        format: "iife",
        file: './dist/bundle.iife.js',
        name: 'PasswordMeterModule',
		esModule: false,
		exports: "named",	
        sourcemap: true
    },
    {
        format: "iife",
        file: './dist/bundle.iife.min.js',
        name: 'PasswordMeterModule',
        sourcemap: true,
		esModule: false,
		exports: "named",	
        plugins: [terser()]
    },
	    {
        file: './dist/bundle.umd.js',
        format: 'umd',
        name: 'PasswordMeterModule',
		esModule: false,
		exports: "named",		
        sourcemap: true
    },
    {
        file: './dist/bundle.umd.min.js',
        format: 'umd',
        name: 'PasswordMeterModule',
		esModule: false,
		exports: "named",
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/bundle.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/bundle.min.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/bundle.amd.js',
        format: 'amd',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/bundle.amd.min.js',
        format: 'amd',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/bundle.es.mjs',
        format: 'es',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/bundle.es.min.mjs',
        format: 'es',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    }],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
};