import React, {
  InputHTMLAttributes,
  ReactElement,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Mods, cx } from '@/shared/lib/classNames/cx';

import { HStack } from '../../Stack';
import { UiText } from '../../Text';
import cls from './UiInput.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 'small' | 'medium' | 'large';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: string;
  size?: InputSize;
  autoFocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactElement;
  addonRight?: ReactElement;
  label?: string;
}

export const UiInput = memo(
  ({
    className,
    value,
    placeholder,
    onChange,
    type = 'text',
    size = 'medium',
    autoFocus,
    readonly = false,
    addonLeft,
    addonRight,
    label,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autoFocus) {
        // setIsFocused(true)
        ref.current?.focus();
      }
    }, [autoFocus]);

    const onChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      onChange?.(e.target.value);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const mods: Mods = {
      [cls.readonly]: readonly,
      [cls.focused]: isFocused,
      [cls.withAddonLeft]: Boolean(addonLeft),
      [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
      <div
        className={cx(cls.inputWrapper, mods, [
          className,
          cls[size],
        ])}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        <input
          ref={ref}
          type={type}
          className={cx(cls.input, {}, [className])}
          value={value}
          readOnly={readonly}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          {...otherProps}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
    );
    if (label) {
      return (
        <HStack max gap='8'>
          <UiText text={label} />
          {input}
        </HStack>
      );
    }

    return input;
  },
);
