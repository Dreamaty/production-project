import { createAsyncThunk } from '@reduxjs/toolkit';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureFlagsOptions,
  ThunkConfig<string>
>(
  'user/updateFeatureFlags',
  async ({ userId, newFeatures }, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: {
            ...getFeatureFlags(),
            ...newFeatures,
          },
        }),
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
