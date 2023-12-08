import {
  ButtonHTMLAttributes,
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react';

import { Mods, cx } from '@/shared/lib/classNames/cx';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonColor =
  | 'normal'
  | 'success'
  | 'error'
  | 'accent';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  square?: boolean;
  size?: ButtonSize;
  inactive?: boolean;
  children?: ReactNode;
  addonLeft?: ReactElement;
  addonRight?: ReactElement;
}

export const Button = forwardRef(
  (
    {
      className,
      children,
      color = 'normal',
      variant = 'outline',
      square,
      size = 'm',
      inactive: disabled,
      addonLeft,
      addonRight,
      ...otherProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.withAddon]: Boolean(addonRight) || Boolean(addonLeft),
    };
    return (
      <button
        type='button'
        className={cx(cls.button, mods, [
          className,
          cls[variant],
          cls[size],
          cls[color],
        ])}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </button>
    );
  },
);
