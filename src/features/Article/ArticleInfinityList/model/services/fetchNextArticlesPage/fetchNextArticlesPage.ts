import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from '../../selectors/articles';
import { articleInfinityListActions } from '../../slice/articleInfinityListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getArticlesHasMore(getState());
  const page = getArticlesPage(getState());

  const isLoading = getArticlesIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articleInfinityListActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
