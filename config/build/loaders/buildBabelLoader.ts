import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export function buildBabelLoader({
  isDev,
  isTsx,
}: BuildBabelLoaderProps) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          '@babel/preset-env',
          [
            '@babel/preset-typescript',
            {
              isTsx,
            },
          ],
        ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [
              babelRemovePropsPlugin,
              {
                props: ['data-testid'],
              },
            ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
