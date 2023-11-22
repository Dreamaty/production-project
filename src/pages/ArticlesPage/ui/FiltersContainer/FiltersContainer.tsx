import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export const FiltersContainer = memo(
  ({ className }: { className?: string }) => {
    const {
      onChangeOrder,
      onChangeSearch,
      onChangeSort,
      onChangeType,
      order,
      search,
      sort,
      type,
    } = useArticleFilters();

    return (
      <ArticlesFilters
        className={className}
        sort={sort}
        order={order}
        type={type}
        search={search}
        onChangeSearch={onChangeSearch}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
        onChangeType={onChangeType}
      />
    );
  },
);
