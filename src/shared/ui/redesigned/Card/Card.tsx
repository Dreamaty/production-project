import { HTMLAttributes, ReactNode, memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardBorder = 'normal' | 'round';

export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapGapToClass: Record<CardPadding, string> = {
  '0': 'padding_0',
  '8': 'padding_8',
  '16': 'padding_16',
  '24': 'padding_24',
};
const mapBorderToClass: Record<CardBorder, string> = {
  round: 'border_round',
  normal: 'border_normal',
};

export const Card = memo(
  ({
    className,
    children,
    variant = 'normal',
    max,
    border = 'round',
    padding = '8',
    ...otherProps
  }: CardProps) => {
    const gapClass = mapGapToClass[padding];
    const borderClass = mapBorderToClass[border];

    return (
      <div
        className={cx(
          cls.card,
          {
            [cls.max]: max,
          },
          [
            className,
            cls[variant],
            cls[gapClass],
            cls[borderClass],
          ],
        )}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);
