import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  memo,
} from 'react';

import { Mods, cx } from '@/shared/lib/classNames/cx';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = memo(
  ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    wrap = 'nowrap',
    ...otherProps
  }: FlexProps) => {
    const classes = [
      className,
      justifyClasses[justify],
      alignClasses[align],
      directionClasses[direction],
      gap && gapClasses[gap],
      cls[wrap],
    ];

    const mods: Mods = {
      [cls.max]: max,
    };

    return (
      <div
        {...otherProps}
        className={cx(cls.flex, mods, classes)}
      >
        {children}
      </div>
    );
  },
);
