import { HTMLAttributes, ReactNode, memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardGap = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  gap?: CardGap;
}

const mapGapToClass: Record<CardGap, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card = memo(
  ({
    className,
    children,
    variant = 'normal',
    max,
    gap = '8',
    ...otherProps
  }: CardProps) => {
    const gapClass = mapGapToClass[gap];

    return (
      <div
        className={cx(
          cls.card,
          {
            [cls.max]: max,
          },
          [className, cls[variant], cls[gapClass]],
        )}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);
