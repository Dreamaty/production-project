import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './Overlay.module.scss';

/**
 *  @deprecated
 */
export const Overlay = memo(
  ({
    className,
    onClick,
  }: {
    className?: string;
    onClick?: () => void;
  }) => {
    return (
      <div
        onClick={onClick}
        className={cx(cls.overlay, {}, [className])}
      />
    );
  },
);
