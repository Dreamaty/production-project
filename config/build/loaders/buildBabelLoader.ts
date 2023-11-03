import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { BuildOptions } from '../types/config'

//TODO: if you have the problem with tsx ts files maybe this because we don't have ts-loader and you need to setup it
interface BuildBabelLoaderProps extends BuildOptions {
	isTsx: boolean
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps)  {
	return {
		test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env',
					['@babel/preset-typescript', {
						isTsx
					}]],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['en', 'ru'],
							keyAsDefaultValue: true,
						},
					],
					'@babel/plugin-transform-runtime',
					isTsx && [babelRemovePropsPlugin, {
						props: ['data-testid']
					}],
					isDev && require.resolve('react-refresh/babel')
				].filter(Boolean),
			},
		},
	}
}