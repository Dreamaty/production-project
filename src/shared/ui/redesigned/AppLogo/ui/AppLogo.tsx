import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { cx } from '@/shared/lib/classNames/cx';

import { HStack } from '../../Stack';
import cls from './AppLogo.module.scss';

export const AppLogo = memo(
  ({
    className,
    size = 50,
  }: {
    className?: string;
    size?: number;
  }) => {
    return (
      <HStack
        max
        justify='center'
        className={cx(cls.appLogoWrapper, {}, [className])}
      >
        <AppSvg
          className={cls.appLogo}
          width={size}
          height={size}
          color='black'
        />
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
      </HStack>
    );
  },
);
