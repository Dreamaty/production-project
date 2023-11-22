import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import {
  SelectOption,
  UiSelect,
} from '@/shared/ui/deprecated/Select';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';
import newCls from './ArticleSortSelector.new.module.scss';

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  }: {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
  }) => {
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('increase'),
        },
        {
          value: 'desc',
          content: t('descending'),
        },
      ],
      [t],
    );

    const sortFieldOptions = useMemo<
      SelectOption<ArticleSortField>[]
    >(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('creating date'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('title'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('views'),
        },
      ],
      [t],
    );

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <div
            className={cx(newCls.articleSortSelector, {}, [
              className,
            ])}
          >
            <VStack gap='8'>
              <UiText text={t('Sort by:')} />
              <Listbox
                items={sortFieldOptions}
                onChange={onChangeSort}
                value={sort}
              />
              <Listbox
                items={orderOptions}
                onChange={onChangeOrder}
                value={order}
              />
            </VStack>
          </div>
        }
        off={
          <div
            className={cx(cls.articleSortSelector, {}, [
              className,
            ])}
          >
            <UiSelect
              options={sortFieldOptions}
              label={t('Sort by')}
              onChange={onChangeSort}
              value={sort}
            />
            <UiSelect
              options={orderOptions}
              label={t('By')}
              onChange={onChangeOrder}
              value={order}
            />
          </div>
        }
      />
    );
  },
);
