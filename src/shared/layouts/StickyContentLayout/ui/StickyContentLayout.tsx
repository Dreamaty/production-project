import { ReactElement, memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './StickyContentLayout.module.scss';

export const StickyContentLayout = memo(
  ({
    className,
    left,
    content,
    right,
  }: {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
  }) => {
    return (
      <div className={cx(cls.mainLayout, {}, [className])}>
        {left && <div className={cls.left}>{left}</div>}
        <div className={cls.content}>{content}</div>
        {right && <div className={cls.right}>{right}</div>}
      </div>
    );
  },
);
