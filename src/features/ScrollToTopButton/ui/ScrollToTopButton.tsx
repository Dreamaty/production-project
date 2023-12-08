import { memo } from 'react';

import CircleUp from '@/shared/assets/icons/circle-up.svg';
import { cx } from '@/shared/lib/classNames/cx';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = memo(
  ({ className }: { className?: string }) => {
    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
      <Icon
        Svg={CircleUp}
        width={32}
        height={32}
        clickable
        onClick={onClick}
        className={cx(cls.scrollToTopButton, {}, [className])}
      />
    );
  },
);
