import { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks';
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import newCls from './Sidebar.new.module.scss';

export const Sidebar = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const sidebarItemsList = useAppSelector(getSidebarItems);

    const onToggle = () => {
      setCollapsed(prev => !prev);
    };
    useEffect(() => {
      console.log('sidebar creating');

      return () => {
        console.log('sidebar deleting');
      };
    }, []);
    const itemsList = useMemo(
      () =>
        sidebarItemsList.map(item => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        )),
      [collapsed, sidebarItemsList],
    );

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={
          <aside
            data-testid='sidebar'
            className={cx(
              cls.sidebar,
              { [cls.collapsed]: collapsed },
              [className],
            )}
          >
            <Button
              data-testid='sidebar-toggle'
              className={cls.collapseBtn}
              onClick={onToggle}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square
              size={ButtonSize.L}
            >
              {collapsed ? '>' : '<'}
            </Button>
            <VStack
              role='navigation'
              className={cls.items}
              gap='8'
            >
              {itemsList}
            </VStack>
            <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher
                short={collapsed}
                className={cls.lang}
              />
            </div>
          </aside>
        }
        on={
          <aside
            data-testid='sidebar'
            className={cx(
              newCls.sidebar,
              { [newCls.collapsed]: collapsed },
              [className],
            )}
          >
            <AppLogo
              size={collapsed ? 30 : 50}
              className={newCls.appLogo}
            />
            <VStack
              role='navigation'
              className={newCls.items}
              gap='8'
            >
              {itemsList}
            </VStack>
            <Icon
              data-testid='sidebar-toggle'
              className={newCls.collapseBtn}
              onClick={onToggle}
              Svg={ArrowIcon}
              clickable
            />
            <div className={newCls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} />
            </div>
          </aside>
        }
      />
    );
  },
);
