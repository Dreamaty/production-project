import { memo, useEffect, useState } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { ScrollToTopButton } from '@/features/ScrollToTopButton';

import cls from './ScrollToolbar.module.scss';

export const ScrollToolbar = memo(
  ({ className }: { className?: string }) => {
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
      const onScroll = () => {
        setAtTop(window.scrollY === 0);
      };

      // Add scroll event listener
      window.addEventListener('scroll', onScroll);

      // Clean up the event listener
      return () =>
        window.removeEventListener('scroll', onScroll);
    }, []);

    return (
      <VStack
        max
        align='center'
        justify='center'
        className={cx(cls.scrollToolbar, {}, [className])}
      >
        {!atTop && <ScrollToTopButton />}
      </VStack>
    );
  },
);
