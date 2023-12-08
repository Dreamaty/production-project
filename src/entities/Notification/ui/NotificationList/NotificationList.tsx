import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

export const NotificationList = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    const { data, isLoading } = useNotifications(null, {
      pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });
    if (isLoading) {
      return (
        <VStack gap='16' max className={cx('', {}, [className])}>
          <Skeleton width={'100%'} border='8px' height={80} />
          <Skeleton width={'100%'} border='8px' height={80} />
          <Skeleton width={'100%'} border='8px' height={80} />
        </VStack>
      );
    }

    return (
      <VStack
        gap='16'
        max
        className={cx(cls.notificationList, {}, [className])}
        align='center'
      >
        {data?.map(item => (
          <NotificationItem key={item.id} notification={item} />
        ))}
      </VStack>
    );
  },
);
