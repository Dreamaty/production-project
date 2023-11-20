import { ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlags } from '../setGetFeatures';

export const ToggleFeatures = ({
  feature,
  on,
  off,
}: {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}) => {
  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
