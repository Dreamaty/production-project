import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import {
  TabItem,
  Tabs as TabsDeprecated,
} from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

import { ArticleType } from '@/entities/Article';

import { articleTypeTabsActions } from '../model/slice/articleTypeTabsSlice';

export const ArticleTypeTabs = memo(
  ({
    className,
    value,
    onChange,
  }: {
    className?: string;
    value: ArticleType;
    onChange: () => void;
  }) => {
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const onClickHandler = useCallback(
      (tabItem: TabItem<ArticleType>) => {
        dispatch(articleTypeTabsActions.setType(tabItem.value));
        onChange();
      },
      [dispatch, onChange],
    );

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('All'),
        },
        {
          value: ArticleType.IT,
          content: t('IT'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Economics'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Science'),
        },
      ],
      [t],
    );
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onClickHandler}
            className={cx('', {}, [className])}
          />
        }
        off={
          <TabsDeprecated
            tabs={typeTabs}
            value={value}
            onTabClick={onClickHandler}
            className={cx('', {}, [className])}
          />
        }
      />
    );
  },
);
