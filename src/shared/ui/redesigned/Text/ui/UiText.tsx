import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './UiText.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'center' | 'left';

export type TextSize = 'small' | 'medium' | 'large' | 'xlarge';

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
  small: 'size_s',
  medium: 'size_m',
  large: 'size_l',
  xlarge: 'size_xl',
};
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  small: 'h4',
  medium: 'h3',
  large: 'h2',
  xlarge: 'h1',
};

export const UiText = memo(
  ({
    className,
    title,
    text,
    align = 'left',
    variant = 'primary',
    size = 'medium',
    bold,
  }: {
    className?: string;
    title?: string;
    text?: string | number;
    align?: TextAlign;
    variant?: TextVariant;
    size?: TextSize;
    bold?: boolean;
  }) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const sizeClass = mapSizeToClass[size];

    const classes = [
      className,
      cls[variant],
      cls[align],
      cls[sizeClass],
    ];

    return (
      <div
        className={cx(
          cls.textWrapper,
          { [cls.bold]: bold },
          classes,
        )}
      >
        {title && (
          <HeaderTag className={cls.title}>{title}</HeaderTag>
        )}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  },
);
