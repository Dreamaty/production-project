import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { cx } from '@/shared/lib/classNames/cx';

import { AppImage } from '../../../redesigned/AppImage';
import { BackgroundColor, Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';
import cls from './Avatar.module.scss';

/**
 *  @deprecated
 */
export const Avatar = memo(
  ({
    className,
    src,
    alt,
    size = 100,
    fallbackBackground = BackgroundColor.PRIMARY_COLOR,
  }: {
    className?: string;
    src?: string;
    alt: string;
    size?: number;
    fallbackBackground?: BackgroundColor;
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
      <Icon
        Svg={UserIcon}
        width={size}
        height={size}
        backgroundColor={fallbackBackground}
      />
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
