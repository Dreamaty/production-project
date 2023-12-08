import { memo } from 'react';

import { ArticleViewSwitcher } from '@/features/Article';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export const ViewSelectorContainer = memo(
  ({ className }: { className?: string }) => {
    const { view, onChangeView } = useArticleFilters();
    return (
      <div className={className}>
        <ArticleViewSwitcher
          onViewClick={onChangeView}
          view={view}
        />
      </div>
    );
  },
);
