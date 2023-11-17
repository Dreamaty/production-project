import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { Card, CardTheme } from '@/shared/ui/Card';
import { UiText } from '@/shared/ui/Text';

import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

export const NotificationItem = memo(
  ({
    className,
    notification,
  }: {
    className?: string;
    notification: Notification;
  }) => {
    const content = (
      <Card
        theme={CardTheme.OUTLINED}
        className={cx(cls.notificationItem, {}, [className])}
      >
        <UiText
          title={notification.title}
          text={notification.description}
        />
      </Card>
    );

    if (notification.href) {
      return (
        <a
          className={cls.link}
          href={notification.href}
          target='_blank'
          rel='noreferrer'
        >
          {content}
        </a>
      );
    }

    return content;
  },
);
