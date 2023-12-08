import { Suspense, memo, useEffect } from 'react';

import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';

import { getUserInited, initAuthData } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = memo(function App() {
  const dispatch = useAppDispatch();
  const inited = useAppSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, inited]);

  if (!inited)
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <div id='app' className={cx('app_redesigned', {}, [])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <div id='app' className={cx('app_redesigned', {}, [])}>
          <Suspense fallback=''>
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={cx('app', {}, [])}>
          <Suspense fallback=''>
            <Navbar />

            <div className='content-page'>
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
    />
  );
});

export default withTheme(App);
