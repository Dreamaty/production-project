import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { BuildOptions } from '../types/config'

//TODO: if you have the problem with tsx ts files maybe this because we don't have ts-loader and you need to setup it
interface BuildBabelLoaderProps extends BuildOptions {
	isTsx: boolean
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps)  {
	const isProd = !isDev
	return {
		test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env',
					['@babel/preset-typescript', {
						isTsx
					}]],
				plugins: [
					'@babel/plugin-transform-runtime',
					isTsx && isProd && [ 
						babelRemovePropsPlugin, {
							props: ['data-testid']
						}
					],
					isDev && require.resolve('react-refresh/babel')
				].filter(Boolean),
			},
		},
	}
}