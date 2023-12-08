/* eslint-disable i18next/no-literal-string */
import { Placement } from '@floating-ui/react';
import { Float } from '@headlessui-float/react';
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { cx } from '@/shared/lib/classNames/cx';

import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import popupCls from '../../styles/popup.module.scss';
import cls from './Listbox.module.scss';

export interface ListboxItem<T extends string> {
  value: T;
  content: ReactNode;
  unavailable?: boolean;
}

interface ListboxProps<T extends string> {
  items?: ListboxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: Placement;
  label?: string;
}

export function Listbox<T extends string>(
  props: ListboxProps<T>,
) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'left-end',
    label,
  } = props;

  const optionsClasses = [cls.options, popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value);
  }, [items, value]);

  return (
    <HStack gap='4'>
      {label && (
        <span
          className={cx(
            cls.label,
            { [cls.unavailable]: readonly },
            [],
          )}
        >{`${label}>`}</span>
      )}
      <HListbox
        as={'div'}
        className={cx('', {}, [className, popupCls.popup])}
        value={value}
        disabled={readonly}
        onChange={onChange}
      >
        <Float shift flip placement={direction}>
          <HListbox.Button
            as={Button}
            inactive={readonly}
            variant='filled'
            addonRight={
              <Icon
                Svg={ArrowIcon}
                className={popupCls.trigger}
              />
            }
          >
            {selectedItem?.content ?? defaultValue}
          </HListbox.Button>
          <HListbox.Options
            className={cx(cls.options, {}, optionsClasses)}
          >
            {items?.map(item => (
              <HListbox.Option
                key={item.value}
                value={item.value}
                disabled={item.unavailable}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    className={cx(
                      cls.option,
                      {
                        [popupCls.active]: active,
                        [popupCls.unavailable]: item.unavailable,
                        [cls.selected]: selected,
                      },
                      [],
                    )}
                  >
                    {selected && '> '}
                    {item.content}
                  </li>
                )}
              </HListbox.Option>
            ))}
          </HListbox.Options>
        </Float>
      </HListbox>
    </HStack>
  );
}
