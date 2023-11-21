import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } =
    thunkApi;
  const userData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  if (!userData) return rejectWithValue('Not logged in');

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings,
        },
      }),
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('In response no json settings');
    }

    return response.jsonSettings;
  } catch (error) {
    return rejectWithValue('error');
  }
});
