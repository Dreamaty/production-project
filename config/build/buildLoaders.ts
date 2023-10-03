import { RuleSetRule } from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options
	
	const swgLoader = {
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

	const babelLoader = buildBabelLoader(options)

	const cssLoader = buildCssLoaders(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [babelLoader, typescriptLoader, cssLoader, swgLoader, fileLoader]
}
