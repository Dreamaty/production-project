import { RuleSetRule } from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const swgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const babelLoader = {
		test: /\.(js|ts|tsx|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['en', 'ru'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	}

	const cssLoader = buildCssLoaders(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [babelLoader, typescriptLoader, cssLoader, swgLoader, fileLoader]
}
