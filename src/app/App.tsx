import { Suspense, useEffect } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';

import { getUserInited, initAuthData } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useAppSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (inited) return <PageLoader />;

  return (
    <div className={cx('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
