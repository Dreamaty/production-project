import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeatureFlagDecorator =
  (features: FeatureFlags) => (StoryComponent: StoryFn) => {
    setFeatureFlags(features);

    return <StoryComponent />;
  };
