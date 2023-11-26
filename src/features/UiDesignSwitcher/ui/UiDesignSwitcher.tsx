import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  getFeatureFlag,
  updateFeatureFlags,
} from '@/shared/lib/features';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { getUserAuthData } from '@/entities/User';

export const UiDesignSwitcher = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const [isLoading, setIsLoading] = useState(false);

    const authData = useAppSelector(getUserAuthData);

    const dispatch = useAppDispatch();

    const items = [
      {
        content: t('New'),
        value: 'new',
      },
      {
        content: t('Old'),
        value: 'old',
      },
    ];

    const onChange = async (value: string) => {
      if (!authData) return;
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
          userId: authData?.id,
        }),
      ).unwrap();
      setIsLoading(false);
    };
    return (
      <HStack>
        <UiText text={t('Interface Variant')} />
        {isLoading ? (
          <Skeleton width={100} height={40} />
        ) : (
          <Listbox
            onChange={onChange}
            items={items}
            value={isAppRedesigned ? 'new' : 'old'}
            className={className}
          />
        )}
      </HStack>
    );
  },
);
