import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>('user/initAuthData', async (_, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!userId)
    return rejectWithValue(
      'Not found inited user in local storage',
    );

  try {
    const response = await dispatch(
      getUserDataByIdQuery(userId),
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('In response no json settings');
    }

    return response;
  } catch (error) {
    return rejectWithValue('error');
  }
});
