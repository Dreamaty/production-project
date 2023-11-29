import { createAsyncThunk } from '@reduxjs/toolkit';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import {
  getFeatureFlags,
  setFeatureFlags,
} from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureFlagsOptions,
  ThunkConfig<string>
>(
  'features/updateFeatureFlags',
  async ({ userId, newFeatures }, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    const allFeatures = {
      ...getFeatureFlags(),
      ...newFeatures,
    };

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: allFeatures,
        }),
      );

      setFeatureFlags(allFeatures);
      window.location.reload();
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
