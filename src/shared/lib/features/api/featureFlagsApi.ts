import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOptions {
  userId: string;
  features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    updateFeatureFlags: build.mutation<
      void,
      UpdateFeatureFlagsOptions
    >({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        body: { features },
        method: 'PATCH',
      }),
    }),
  }),
});
export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
