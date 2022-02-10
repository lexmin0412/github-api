import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
	plugins: [
    commonjs(),
		nodeResolve(),  // 解析node模块(rollup默认不支持)
		json(),
    typescript()
	],
};

export default config
