import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SortOrder } from '@/shared/types/sort';

import { ArticleSortField } from '../consts/consts';
import { ArticleSortSchema } from '../types/ArticleSort';

const initialState: ArticleSortSchema = {
  sort: ArticleSortField.CREATED,
  search: '',
  order: 'asc',
};

export const articleSortSlice = createSlice({
  name: 'articleSort',
  initialState,
  reducers: {
    setSort: (
      state,
      action: PayloadAction<ArticleSortField>,
    ) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
  },
});

export const { actions: articleSortActions } = articleSortSlice;

export const { reducer: articleSortReducer } = articleSortSlice;
