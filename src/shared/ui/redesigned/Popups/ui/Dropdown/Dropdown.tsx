import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { DropdownDirection } from '@/shared/types/ui';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

interface DropdownItem {
  value?: string;
  content?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const {
    className,
    trigger,
    items,
    direction = 'bottom left',
  } = props;

  return (
    <Menu
      as='div'
      className={cx('', {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={cx(cls.items, {}, [
          mapDirectionClass[direction],
          popupCls.menu,
        ])}
      >
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              key={'dropdown-key-' + index}
              disabled={item.disabled}
              onClick={item.onClick}
              className={cx(
                cls.item,
                {
                  [popupCls.active]: active,
                },
                [],
              )}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                disabled={item.disabled}
                key={'dropdown-key-' + index}
                as={AppLink}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              disabled={item.disabled}
              key={'dropdown-key-' + index}
              as={Fragment}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
