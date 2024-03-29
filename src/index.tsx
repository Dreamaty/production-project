import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';

import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';

import CloudinaryProvider from './app/providers/CloudinaryProvider/CloudinaryProvider';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root not found.');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ForceUpdateProvider>
          <ThemeProvider>
            <CloudinaryProvider>
              <App />
            </CloudinaryProvider>
          </ThemeProvider>
        </ForceUpdateProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
