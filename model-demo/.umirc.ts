import { defineConfig } from 'umi';
import { resolve } from 'path';
import zhCN from 'antd/lib/locale/zh_CN';
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

export default defineConfig({
	antd: {
		import: true,
		style: 'less',
		configProvider: {
			locale: {zhCN}
		}
	},
	autoprefixer: {
		flexbox: 'no-2009'
	},
	base: '/', // 设置路由前缀，通常用于部署到非根目录
	chainWebpack(memo, { env, webpack }) {
		memo.plugin('case-sensitive-paths').use(CaseSensitivePathsPlugin);
	},
	copy: [], // 设置要复制到输出目录的文件或文件夹，支持配置 from-to，{from: 'bar/bar.js',to: 'some/bar.js',}
	cssMinifierOptions: {
		minifyWhitespace: true,
		minifySyntax: true,
	},
	define: {
		'process.env': process.env
	}, //用于提供给代码中可用的变量，如process.env.NODE_ENV，值为 development 或 production
	devtool: process.env.NODE_ENV === 'development' ? 'eval' : false, // 只设置 dev 阶段的 sourcemap
	dva: {
		immer: {
			enableES5: true,
			enableAllPlugins: true,
		},
	},
	fastRefresh: true, // 开发环境下，可以保持组件状态
	hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
	ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
	initialState: {}, // 初始值
	inlineLimit: 10000, //配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。
	jsMinifier: 'esbuild', // 配置构建时压缩 JavaScript 的工具
	jsMinifierOptions: {
		minifyWhitespace: true,
		minifyIdentifiers: true,
		minifySyntax: true,
	},
	model: {},
	// mfsu: false,
	mfsu: {
		esbuild: true
	},
	plugins: ['@umijs/plugins/dist/initial-state', '@umijs/plugins/dist/model', '@umijs/plugins/dist/dva', '@umijs/plugins/dist/request', '@umijs/plugins/dist/antd'],
	polyfill: {
		imports: [
			'core-js/features/promise/try',
			'core-js/proposals/math-extensions',
		]
	},
	publicPath: '/', // 如果静态文件部署再飞根目录，同时要兼顾开发环境正常调试，可是设置process.env.NODE_ENV === 'production' ? '/foo/' : '/'
	request: {
		dataField: '',
	},
	routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: 'home'
    },
    {
      path: '/docs',
      component: 'docs'
    }
  ], // 路由
	targets: {
		// 配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。
		ie: 11,
	},
	title: 'umi app' // 配置标题
});
