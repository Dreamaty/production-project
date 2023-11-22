/* eslint-disable max-len */
import { memo, useCallback } from 'react';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';

import {
  ArticlePageGreeting,
  articleInfinityListReducer,
  fetchNextArticlesPage,
} from '@/features/Article';
import { Page } from '@/widgets/Page';

import { ArticleInfiniteList } from '../../../../features/Article/ArticleInfinityList/ui/ArticleInfiniteList/ArticleInfiniteList';
import { ArticleFilter } from '../ArticleFilter/ArticleFilter';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer';
import cls from './ArticlesPage.module.scss';
import newCls from './ArticlesPage.new.module.scss';

const reducers: ReducersList = {
  articleInfiniteList: articleInfinityListReducer,
};

const ArticlesPage = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);
  const content = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          content={
            <Page
              className={cx(newCls.articlesPage, {}, [
                className,
              ])}
              onScrollEnd={onLoadNextPart}
            >
              <ArticleInfiniteList className={newCls.list} />
              <ArticlePageGreeting />
            </Page>
          }
          right={<FiltersContainer />}
        />
      }
      off={
        <Page
          className={cx(cls.articlesPage, {}, [className])}
          onScrollEnd={onLoadNextPart}
        >
          <ArticleFilter />
          <ArticleInfiniteList className={cls.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
