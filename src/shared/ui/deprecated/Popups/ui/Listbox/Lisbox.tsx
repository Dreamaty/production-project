import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { DropdownDirection } from '@/shared/types/ui';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Listbox.module.scss';

export interface ListboxItem {
  value: string;
  content: ReactNode;
  unavailable?: boolean;
}

interface ListboxProps {
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

/**
 *  @deprecated
 */
export function Listbox(props: ListboxProps) {
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
  ];
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
          <Button disabled={readonly}>
            {value ?? defaultValue}
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
                    },
                    [],
                  )}
                >
                  {selected && '!!!'}
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
