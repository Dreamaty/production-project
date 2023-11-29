import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code } from '@/shared/ui/redesigned/Code';

import { ArticleCodeBlock } from '../../model/types/article';

export const ArticleCodeBlockComponent = memo(
  ({
    className,
    block,
  }: {
    className?: string;
    block: ArticleCodeBlock;
  }) => {
    return (
      <div className={className}>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Code text={block.code} />}
          off={<CodeDeprecated text={block.code} />}
        />
      </div>
    );
  },
);
