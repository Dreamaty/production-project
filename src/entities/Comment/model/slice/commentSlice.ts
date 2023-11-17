import { createSlice } from '@reduxjs/toolkit';

import { CommentSchema } from '../types/comment';

const initialState: CommentSchema = {
  data: [],
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
});

export const { actions: commentActions } = commentSlice;

export const { reducer: commentReducer } = commentSlice;
