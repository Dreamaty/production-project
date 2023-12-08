import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

import { ValidateProfileError } from '../../consts/consts';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!profileId)
    return rejectWithValue(ValidateProfileError.NO_ID);

  try {
    const response = await extra.api.get<Profile>(
      `/profile/${profileId}`,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(ValidateProfileError.SERVER_ERROR);
  }
});
