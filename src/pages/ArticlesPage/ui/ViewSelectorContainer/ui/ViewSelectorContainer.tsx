import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import { ArticleViewSwitcher } from '@/features/Article';

import { useArticleFilters } from '../../../lib/hooks/useArticleFilters';
import cls from './ViewSelectorContainer.module.scss';

export const ViewSwitcherContainer = memo(
  ({ className }: { className?: string }) => {
    const { view, onChangeView } = useArticleFilters();
    return (
      <div
        className={cx(cls.viewSelectorContainer, {}, [
          className,
        ])}
      >
        <ArticleViewSwitcher
          onViewClick={onChangeView}
          view={view}
          className={cls.viewSwitcher}
        />
      </div>
    );
  },
);
