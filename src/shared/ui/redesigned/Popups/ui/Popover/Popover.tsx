import { Placement } from '@floating-ui/react';
import { Float } from '@headlessui-float/react';
import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  trigger: ReactNode;
  className?: string;
  children: ReactNode;
  direction?: Placement;
}

export function Popover({
  trigger,
  className,
  children,
  direction = 'bottom',
}: PopoverProps) {
  const menuClasses = [popupCls.menu];

  return (
    <HPopover
      className={cx('', {}, [className, popupCls.popup])}
    >
      <Float shift placement={direction}>
        <HPopover.Button as='div' className={popupCls.trigger}>
          {trigger}
        </HPopover.Button>

        <HPopover.Panel
          className={cx(cls.panel, {}, menuClasses)}
        >
          {children}
        </HPopover.Panel>
      </Float>
    </HPopover>
  );
}
