import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  trigger: ReactNode;
  className?: string;
  children: ReactNode;
  direction?: DropdownDirection;
}

/**
 *  @deprecated
 */
export function Popover({
  trigger,
  className,
  children,
  direction = 'bottom left',
}: PopoverProps) {
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={cx('', {}, [className, popupCls.popup])}
    >
      <HPopover.Button as='div' className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={cx(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
