import { RuleSetRule } from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options
	
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|ttf|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
	const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })

	const cssLoader = buildCssLoaders(isDev)

	//const typescriptLoader = {
	//	test: /\.tsx?$/,
	//	use: 'ts-loader',
	//	exclude: /node_modules/,
	//}

	return [
		fileLoader,
		svgLoader, 
		codeBabelLoader, 
		tsxBabelLoader, 
		cssLoader  
	]
}
