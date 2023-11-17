import { createAsyncThunk } from '@reduxjs/toolkit';

import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';

import {
  getArticleSortBy,
  getArticleSortOrder,
  getArticleSortSearch,
} from '../../../../ArticleSort';
import { getArticleTypeTabsSelectedType } from '../../../../ArticleTypeTabs';
import {
  getArticlesLimit,
  getArticlesPage,
} from '../../selectors/articles';

interface FetchArticlesListProperties {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProperties,
  ThunkConfig<string>
>('article/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const limit = getArticlesLimit(getState());
  const page = getArticlesPage(getState());

  const sort = getArticleSortBy(getState());
  const order = getArticleSortOrder(getState());
  const search = getArticleSortSearch(getState());

  const type = getArticleTypeTabsSelectedType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await extra.api.get<Article[]>(
      '/articles',
      {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      },
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
