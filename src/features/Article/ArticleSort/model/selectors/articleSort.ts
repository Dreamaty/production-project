import { StateSchema } from '@/app/providers/StoreProvider';

import { ArticleSortField } from '../consts/consts';

export const getArticleSortOrder = (state: StateSchema) =>
  state.articleSort?.order || 'asc';

export const getArticleSortBy = (state: StateSchema) =>
  state.articleSort?.sort || ArticleSortField.CREATED;

export const getArticleSortSearch = (state: StateSchema) =>
  state.articleSort?.search ?? '';
