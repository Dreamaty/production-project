import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

export const ArticleListItemSkeleton = memo(
  ({
    className,
    view,
  }: {
    className?: string;
    view: ArticleView;
  }) => {
    if (view === ArticleView.BLOCKS) {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div
          className={cx(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card>
            <div className={cls.imageWrapper}>
              <Skeleton
                width={200}
                height={200}
                className={cls.img}
              />
            </div>
            <div className={cls.infoWrapper}>
              <Skeleton width={130} height={16} />
            </div>
            <Skeleton
              width={160}
              height={16}
              className={cls.title}
            />
          </Card>
        </div>
      );
    }

    return (
      <div
        className={cx(cls.articleListItem, {}, [
          className,
          cls[view],
        ])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton
              width={150}
              height={16}
              className={cls.username}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.date}
            />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={cls.title}
          />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  },
);
