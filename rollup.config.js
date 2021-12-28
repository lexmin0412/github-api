import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'

const config = {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
	plugins: [
		nodeResolve({
			preferBuiltins: true  // 如果遇到同名的，使用原生模块，false表示寻找本地如node_modules的其他依赖，比如fs等依赖会有这种情况
		}),  // 解析node模块(rollup默认不支持)
    commonjs(),
		json(),
	],
};

export default config
