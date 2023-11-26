import { ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlag } from '../../lib/setGetFeatures';

export const ToggleFeatures = ({
  feature,
  on,
  off,
}: {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}) => {
  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};
