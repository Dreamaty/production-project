import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Card as CardDeprecated,
  CardTheme,
} from '@/shared/ui/deprecated/Card';
import { UiText as UiTextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { UiText } from '@/shared/ui/redesigned/Text';

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
      <ToggleFeatures
        feature={'isArticleRatingEnabled'}
        on={
          <Card
            className={cx(cls.notificationItem, {}, [className])}
          >
            <UiText
              title={notification.title}
              text={notification.description}
            />
          </Card>
        }
        off={
          <CardDeprecated
            theme={CardTheme.OUTLINED}
            className={cx(cls.notificationItem, {}, [className])}
          >
            <UiTextDeprecated
              title={notification.title}
              text={notification.description}
            />
          </CardDeprecated>
        }
      />
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
