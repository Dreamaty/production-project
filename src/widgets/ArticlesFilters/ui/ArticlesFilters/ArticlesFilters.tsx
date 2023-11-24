import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { UiInput } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleType } from '@/entities/Article';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  articleSortReducer,
  articleTypeTabsReducer,
} from '@/features/Article';

import cls from './ArticlesFilters.module.scss';

const reducers: ReducersList = {
  articleSort: articleSortReducer,
  articleTabTypes: articleTypeTabsReducer,
};

export const ArticlesFilters = memo(
  ({
    className,
    sort,
    order,
    type,
    search,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeType,
  }: {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (newSearch: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: () => void;
  }) => {
    const { t } = useTranslation('article');
    return (
      <DynamicModuleLoader reducers={reducers}>
        <Card
          className={cx(cls.articlesFilters, {}, [className])}
          padding='24'
        >
          <VStack gap='32'>
            <UiInput
              addonLeft={<Icon Svg={SearchIcon} />}
              placeholder={t('Search')}
              value={search}
              size='small'
              onChange={onChangeSearch}
            />
            <ArticleTypeTabs
              className={cls.typeTabs}
              onChange={onChangeType}
              value={type}
            />
            <ArticleSortSelector
              order={order}
              sort={sort}
              onChangeOrder={onChangeOrder}
              onChangeSort={onChangeSort}
            />
          </VStack>
        </Card>
      </DynamicModuleLoader>
    );
  },
);
