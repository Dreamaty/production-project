import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Card } from '@/shared/ui/deprecated/Card';
import { UiInput } from '@/shared/ui/deprecated/Input';

import { articleSortReducer } from '../../../../features/Article/ArticleSort/model/slice/articleSortSlice';
import { ArticleSortSelector } from '../../../../features/Article/ArticleSort/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from '../../../../features/Article/ArticleTypeTabs';
import { articleTypeTabsReducer } from '../../../../features/Article/ArticleTypeTabs/model/slice/articleTypeTabsSlice';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import cls from './ArticleFilter.module.scss';

const reducers: ReducersList = {
  articleSort: articleSortReducer,
  articleTabTypes: articleTypeTabsReducer,
};

export const ArticleFilter = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation('article');

    const {
      sort,
      order,
      search,
      type,
      onChangeSort,
      onChangeOrder,
      onChangeSearch,
      onChangeType,
    } = useArticleFilters();

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={cx(cls.articleFilter, {}, [className])}>
          <div className={cls.sortWrapper}>
            <ArticleSortSelector
              order={order}
              sort={sort}
              onChangeOrder={onChangeOrder}
              onChangeSort={onChangeSort}
            />
          </div>
          <Card className={cls.search}>
            <UiInput
              placeholder={t('Search')}
              value={search}
              onChange={onChangeSearch}
            />
          </Card>
          <ArticleTypeTabs
            value={type}
            className={cls.typeTabs}
            onChange={onChangeType}
          />
        </div>
      </DynamicModuleLoader>
    );
  },
);
