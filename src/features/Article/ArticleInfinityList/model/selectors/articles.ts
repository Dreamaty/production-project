import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const getArticlesView = (state: StateSchema) =>
  state.articleInfiniteList?.view || ArticleView.BLOCKS;

export const getArticlesError = (state: StateSchema) =>
  state.articleInfiniteList?.error;

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articleInfiniteList?.isLoading || false;

export const getArticlesPage = (state: StateSchema) =>
  state.articleInfiniteList?.page || 1;

export const getArticlesLimit = (state: StateSchema) =>
  state.articleInfiniteList?.limit || 9;

export const getArticlesHasMore = (state: StateSchema) =>
  state.articleInfiniteList?.hasMore;

export const getArticlesInited = (state: StateSchema) =>
  state.articleInfiniteList?._inited;
