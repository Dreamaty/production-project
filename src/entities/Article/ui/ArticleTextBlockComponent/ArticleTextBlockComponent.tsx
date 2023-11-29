import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { UiText as UiTextDeprecated } from '@/shared/ui/deprecated/Text';
import { UiText } from '@/shared/ui/redesigned/Text';

import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

export const ArticleTextBlockComponent = memo(
  ({
    className,
    block,
  }: {
    className?: string;
    block: ArticleTextBlock;
  }) => {
    return (
      <div
        className={cx(cls.articleTextBlockComponent, {}, [
          className,
        ])}
      >
        {block.title ?? (
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <UiText
                title={block.title}
                className={cls.title}
              />
            }
            off={
              <UiTextDeprecated
                title={block.title}
                className={cls.title}
              />
            }
          />
        )}
        {block.paragraphs.map((paragraph, index) => (
          <ToggleFeatures
            key={paragraph + index}
            feature={'isAppRedesigned'}
            on={
              <UiText
                key={paragraph + index}
                text={paragraph}
                className={cls.paragraph}
              />
            }
            off={
              <UiTextDeprecated
                key={paragraph + index}
                text={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  },
);
