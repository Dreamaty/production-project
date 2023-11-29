import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import redesignedCls from './SidebarItem.new.module.scss';

export const SidebarItem = memo(
  ({
    item,
    collapsed,
  }: {
    item: SidebarItemType;
    collapsed: boolean;
  }) => {
    const { t } = useTranslation();

    const isAuth = useAppSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <AppLink
            to={item.path}
            className={cx(redesignedCls.link, {
              [redesignedCls.collapsed]: collapsed,
            })}
            activeClassName={redesignedCls.active}
          >
            <Icon Svg={item.Icon} />

            <span>{t(item.text)}</span>
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cx(cls.link, {
              [cls.collapsed]: collapsed,
            })}
          >
            <item.Icon className={cls.icon} />
            <span>{t(item.text)}</span>
          </AppLinkDeprecated>
        }
      />
    );
  },
);
