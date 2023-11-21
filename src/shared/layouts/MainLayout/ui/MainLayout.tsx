import { ReactElement, memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './MainLayout.module.scss';

export const MainLayout = memo(
  ({
    className,
    content,
    header,
    sidebar,
    toolbar,
  }: {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
  }) => {
    return (
      <div className={cx(cls.mainLayout, {}, [className])}>
        <div className={cls.sidebar}>{sidebar}</div>
        <div className={cls.content}>{content}</div>
        <div className={cls.rightbar}>
          <div className={cls.header}>{header}</div>
          <div className={cls.toolbar}>{toolbar}</div>
        </div>
      </div>
    );
  },
);
