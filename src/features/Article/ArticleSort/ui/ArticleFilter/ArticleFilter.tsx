import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/deprecated/Card';
import { UiInput } from '@/shared/ui/deprecated/Input';

import { ArticleView } from '@/entities/Article';

import {
  articleInfinityListActions,
  fetchArticlesList,
  getArticlesView,
} from '../../../ArticleInfinityList';
import { ArticleTypeTabs } from '../../../ArticleTypeTabs';
import { articleTypeTabsReducer } from '../../../ArticleTypeTabs/model/slice/articleTypeTabsSlice';
import { ArticleViewSwitcher } from '../../../ArticleViewSwitcher';
import { ArticleSortField } from '../../model/consts/consts';
import {
  getArticleSortBy,
  getArticleSortOrder,
  getArticleSortSearch,
} from '../../model/selectors/articleSort';
import {
  articleSortActions,
  articleSortReducer,
} from '../../model/slice/articleSortSlice';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import cls from './ArticleFilter.module.scss';

const reducers: ReducersList = {
  articleSort: articleSortReducer,
  articleTabTypes: articleTypeTabsReducer,
};

export const ArticleFilter = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const articlesView = useAppSelector(getArticlesView);
    const sort = useAppSelector(getArticleSortBy);
    const order = useAppSelector(getArticleSortOrder);
    const search = useAppSelector(getArticleSortSearch);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const updateList = useCallback(() => {
      dispatch(articleInfinityListActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeView = useCallback(
      (newView: ArticleView) =>
        dispatch(articleInfinityListActions.setView(newView)),
      [dispatch],
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articleSortActions.setSort(newSort));
        updateList;
      },
      [dispatch, updateList],
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articleSortActions.setOrder(newOrder));
        updateList;
      },
      [dispatch, updateList],
    );

    const onChangeSearch = useCallback(
      (value: string) => {
        dispatch(articleSortActions.setSearch(value));
        dispatch(articleInfinityListActions.setPage(1));
        debouncedFetchData();
      },
      [debouncedFetchData, dispatch],
    );

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={cx(cls.articleFilter, {}, [className])}>
          <div className={cls.sortWrapper}>
            <ArticleSortSelector
              order={order}
              sort={sort}
              onChangeOrder={onChangeOrder}
              onChangeSort={onChangeSort}
            />
            <ArticleViewSwitcher
              onViewClick={onChangeView}
              view={articlesView}
              className={cls.viewSwitcher}
            />
          </div>
          <Card className={cls.search}>
            <UiInput
              placeholder={t('Search')}
              value={search}
              onChange={onChangeSearch}
            />
          </Card>
          <ArticleTypeTabs
            className={cls.typeTabs}
            onChange={updateList}
          />
        </div>
      </DynamicModuleLoader>
    );
  },
);
