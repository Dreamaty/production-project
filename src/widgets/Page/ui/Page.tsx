import {
  MutableRefObject,
  ReactNode,
  UIEvent,
  memo,
  useRef,
} from 'react';
import { useLocation } from 'react-router';

import { cx } from '@/shared/lib/classNames/cx';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getSavedScrollByPath,
  scrollSaveActions,
} from '@/features/ScrollSave';

import cls from './Page.module.scss';

export const PAGE_ID = 'page_id';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef =
    useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef =
    useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useAppSelector((state: StateSchema) =>
    getSavedScrollByPath(state, location.pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: location.pathname,
        position: e.currentTarget.scrollTop,
      }),
    );
  }, 500);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <main
      ref={wrapperRef}
      className={cx(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.pageRedesigned,
          off: () => cls.page,
        }),
        {},
        [className],
      )}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? (
        <div className={cls.trigger} ref={triggerRef} />
      ) : null}
    </main>
  );
});
