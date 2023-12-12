// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) return apiUrl;

  if (mode === 'production') {
    return '/api';
  }

  return 'http://localhost:8000';
}

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const apiUrl = getApiUrl(mode, env?.apiUrl);
  const fileCloudUrl = env?.fileCloudUrl || apiUrl;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    fileCloudUrl,
    project: 'frontend',
  });

  return config;
};
