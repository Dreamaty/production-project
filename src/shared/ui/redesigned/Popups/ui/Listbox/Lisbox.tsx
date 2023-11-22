/* eslint-disable i18next/no-literal-string */
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { DropdownDirection } from '@/shared/types/ui';

import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
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
  direction?: DropdownDirection;
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
    direction = 'bottom left',
    label,
  } = props;

  const optionsClasses = [
    cls.options,
    mapDirectionClass[direction],
    popupCls.menu,
  ];

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value);
  }, [items, value]);

  // TODO: floating https://floating-ui.com/docs/react
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
        <HListbox.Button className={popupCls.trigger}>
          <Button disabled={readonly} variant='filled'>
            {selectedItem?.content ?? defaultValue}▼
          </Button>
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
      </HListbox>
    </HStack>
  );
}
