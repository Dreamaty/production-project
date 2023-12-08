import { useCallback } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';

import { ArticleView } from '@/entities/Article';
import {
  ArticleSortField,
  articleInfinityListActions,
  articleSortActions,
  fetchArticlesList,
  getArticleSortBy,
  getArticleSortOrder,
  getArticleSortSearch,
  getArticleTypeTabsSelectedType,
  getArticlesView,
} from '@/features/Article';

export function useArticleFilters() {
  const sort = useAppSelector(getArticleSortBy);
  const order = useAppSelector(getArticleSortOrder);
  const search = useAppSelector(getArticleSortSearch);
  const type = useAppSelector(getArticleTypeTabsSelectedType);

  const view = useAppSelector(getArticlesView);
  const dispatch = useAppDispatch();

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      return dispatch(
        articleInfinityListActions.setView(newView),
      );
    },
    [dispatch],
  );

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const updateList = useCallback(() => {
    console.log('this is update list');

    dispatch(articleInfinityListActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articleSortActions.setSort(newSort));
      updateList();
    },
    [dispatch, updateList],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articleSortActions.setOrder(newOrder));
      updateList();
    },
    [dispatch, updateList],
  );

  const onChangeType = useCallback(() => {
    updateList();
  }, [updateList]);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articleSortActions.setSearch(value));
      dispatch(articleInfinityListActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  return {
    sort,
    order,
    search,
    type,
    view,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  };
}
