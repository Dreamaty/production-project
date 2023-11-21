import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { TextAlign, UiText } from '@/shared/ui/deprecated/Text';

import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

export const ArticleImageBlockComponent = memo(
  ({
    className,
    block,
  }: {
    className?: string;
    block: ArticleImageBlock;
  }) => {
    return (
      <div
        className={cx(cls.articleImageBlockComponent, {}, [
          className,
        ])}
      >
        <img
          src={block.src}
          className={cls.image}
          alt={block.title}
        />
        {block.title && (
          <UiText
            align={TextAlign.CENTER}
            text={block.title}
            className={cls.imgTitle}
          />
        )}
      </div>
    );
  },
);
