import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'

const config = {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
		plugins: [
			getBabelOutputPlugin({
				presets: [
					[
						'@babel/preset-env'
					]
				],
				plugins: [
					[
						'@babel/plugin-transform-runtime', {
							'regenerator': true
						}
					]
				]
			})
		]
  },
	plugins: [
		nodeResolve(),  // 解析node模块(rollup默认不支持)
    commonjs(),
		babel(),
		json()
	],
};

export default config
