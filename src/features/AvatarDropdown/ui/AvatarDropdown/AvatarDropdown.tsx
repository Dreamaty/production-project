import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { BackgroundColor } from '@/shared/ui/deprecated/Icon';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';

export const AvatarDropdown = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const isAdmin = useAppSelector(isUserAdmin);
    const isManager = useAppSelector(isUserManager);
    const authData = useAppSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
      dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) return null;

    const items = [
      ...(isAdminPanelAvailable
        ? [
            {
              content: t('Administration'),
              href: getRouteAdminPanel(),
            },
          ]
        : []),
      {
        content: t('Settings'),
        href: getRouteSettings(),
      },
      {
        content: t('Profile'),
        href: getRouteProfile(authData.id),
      },
      {
        content: t('Sign Out'),
        onClick: onLogOut,
      },
    ];

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Dropdown
            className={cx('', {}, [className])}
            items={items}
            trigger={
              <Avatar
                src={authData.avatar}
                size={40}
                alt={'user avatar'}
              />
            }
          />
        }
        off={
          <DropdownDeprecated
            className={cx('', {}, [className])}
            items={items}
            trigger={
              <AvatarDeprecated
                fallbackBackground={
                  BackgroundColor.SECONDARY_COLOR
                }
                src={authData.avatar}
                size={30}
                alt={'user avatar'}
              />
            }
          />
        }
      />
    );
  },
);
