import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { getFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignedDecorator = (
  StoryComponent: StoryFn,
) => {
  setFeatureFlags({
    ...getFeatureFlags(),
    isAppRedesigned: true,
  });

  return (
    <div className='app_redesigned'>
      <StoryComponent />
    </div>
  );
};
