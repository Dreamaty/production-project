import { ReactNode, useCallback } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

/**
 *  @deprecated
 */
export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onTabClick,
}: {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <div className={cx(cls.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          theme={
            tab.value === value
              ? CardTheme.OUTLINED
              : CardTheme.NORMAL
          }
          key={tab.value}
          className={cls.tab}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
