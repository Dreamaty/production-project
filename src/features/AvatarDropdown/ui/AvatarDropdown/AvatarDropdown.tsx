import { t } from 'i18next';
import { memo, useCallback } from 'react';

import {
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { BackgroundColor } from '@/shared/ui/deprecated/Icon';
import { Dropdown } from '@/shared/ui/deprecated/Popups';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';

export const AvatarDropdown = memo(
  ({ className }: { className?: string }) => {
    const isAdmin = useAppSelector(isUserAdmin);
    const isManager = useAppSelector(isUserManager);
    const authData = useAppSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
      dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) return null;

    return (
      <Dropdown
        className={cx('', {}, [className])}
        items={[
          ...(isAdminPanelAvailable
            ? [
                {
                  content: t('Administration'),
                  href: getRouteAdminPanel(),
                },
              ]
            : []),
          {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
          },
          {
            content: t('Sign Out'),
            onClick: onLogOut,
          },
        ]}
        trigger={
          <Avatar
            fallbackBackground={BackgroundColor.SECONDARY_COLOR}
            src={authData.avatar}
            size={30}
            alt={'user avatar'}
          />
        }
      />
    );
  },
);
