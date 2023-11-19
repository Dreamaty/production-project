import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonService';
import { JsonSettings } from '../types/jsotSettings';
import { User, UserSchema } from '../types/user';

// import type { RootState } from '../../app/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(action.payload.id),
      );
      state.authData = action.payload;
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<JsonSettings>) => {
        if (!state.authData) return;

        state.authData.jsonSettings = action.payload;
      },
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        if (!state.authData) return;

        state.authData = action.payload;
        setFeatureFlags(action.payload.features);
        state._inited = true;
      },
    );
    builder.addCase(initAuthData.rejected, state => {
      state._inited = true;
    });
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
