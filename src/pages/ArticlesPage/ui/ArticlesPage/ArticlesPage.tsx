/* eslint-disable max-len */
import { memo, useCallback } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';

import {
  ArticleFilter,
  ArticlePageGreeting,
  articleInfinityListReducer,
  fetchNextArticlesPage,
} from '@/features/Article';
import { Page } from '@/widgets/Page';

import { ArticleInfiniteList } from '../../../../features/Article/ArticleInfinityList/ui/ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articleInfiniteList: articleInfinityListReducer,
};

const ArticlesPage = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        className={cx(cls.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleFilter />
        <ArticleInfiniteList className={cls.list} />
        <ArticlePageGreeting />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
