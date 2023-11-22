import { ReactNode, useCallback } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import { Card } from '../Card/Card';
import { Flex } from '../Stack';
import { FlexDirection } from '../Stack/Flex/Flex';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  direction = 'column',
  onTabClick,
}: {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      align='start'
      gap='8'
      direction={direction}
      className={cx(cls.tabs, {}, [className])}
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            key={tab.value}
            className={cx(cls.tab, {
              [cls.selected]: isSelected,
            })}
            onClick={clickHandle(tab)}
            border='round'
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};
