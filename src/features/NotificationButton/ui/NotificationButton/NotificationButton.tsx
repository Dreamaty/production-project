import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import {
  BackgroundColor,
  Icon as IconDeprecated,
} from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import { NotificationList } from '@/entities/Notification';

import cls from './NotificationButton.module.scss';

export const NotificationButton = memo(
  ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => setIsOpen(true), []);
    const onCloseDrawer = useCallback(
      () => setIsOpen(false),
      [],
    );

    const trigger = (
      <ToggleFeatures
        feature={'isArticleRatingEnabled'}
        on={
          <Icon
            Svg={NotificationIcon}
            clickable
            onClick={onOpenDrawer}
            className={cx(cls.notificationButton, {}, [
              className,
            ])}
          />
        }
        off={
          <ButtonDeprecated
            onClick={onOpenDrawer}
            theme={ButtonTheme.CLEAR}
            className={cx(cls.notificationButton, {}, [
              className,
            ])}
          >
            <IconDeprecated
              Svg={NotificationIconDeprecated}
              backgroundColor={BackgroundColor.SECONDARY_COLOR}
            />
          </ButtonDeprecated>
        }
      />
    );

    return (
      <div>
        <BrowserView>
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <Popover trigger={trigger}>
                <NotificationList
                  className={cls.notifications}
                />
              </Popover>
            }
            off={
              <PopoverDeprecated trigger={trigger}>
                <NotificationList
                  className={cls.notifications}
                />
              </PopoverDeprecated>
            }
          />
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </div>
    );
  },
);
