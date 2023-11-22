import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { cx } from '@/shared/lib/classNames/cx';

import { AppImage } from '../../../redesigned/AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';
import cls from './Avatar.module.scss';

export const Avatar = memo(
  ({
    className,
    src,
    alt,
    size = 100,
  }: {
    className?: string;
    src?: string;
    alt: string;
    size?: number;
  }) => {
    const styles = useMemo<CSSProperties>(() => {
      return {
        width: size || 100,
        height: size || 100,
      };
    }, [size]);

    const fallback = (
      <Skeleton border='50%' width={size} height={size} />
    );

    const errorFallback = (
      <Icon Svg={UserIcon} width={size} height={size} />
    );

    return (
      <AppImage
        fallback={fallback}
        src={src}
        alt={alt}
        className={cx(cls.avatar, {}, [className])}
        style={styles}
        errorFallback={errorFallback}
      />
    );
  },
);
