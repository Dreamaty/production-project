import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './UiText.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h4',
  [TextSize.M]: 'h3',
  [TextSize.L]: 'h2',
  [TextSize.XL]: 'h1',
};

export const UiText = memo(
  ({
    className,
    title,
    text,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
  }: {
    className?: string;
    title?: string;
    text?: string | number;
    align?: TextAlign;
    theme?: TextTheme;
    size?: TextSize;
  }) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const classes = [className, cls[theme], cls[align], cls[size]];

    return (
      <div className={cx(cls.textWrapper, {}, classes)}>
        {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  },
);
