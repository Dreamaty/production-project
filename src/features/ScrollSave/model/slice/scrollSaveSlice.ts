import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[action.payload.path] =
        action.payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;

export const { reducer: scrollSaveReducer } = scrollSaveSlice;
