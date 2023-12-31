import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './AppImage.module.scss';

type ObjectFit = 'cover' | 'fill' | 'contain' | 'none';

interface AppImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
  objectFit?: ObjectFit;
}

export const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    objectFit = 'cover',
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const getSrc = (src?: string) => {
      if (src?.startsWith('/images')) {
        return __FILE_CLOUD__ + src;
      }
      return src;
    };

    useLayoutEffect(() => {
      const img = new Image();

      img.src = getSrc(src) ?? '';

      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setHasError(true);
      };
    }, [src]);

    if (isLoading && fallback) {
      return fallback;
    }

    if (hasError && errorFallback) {
      return errorFallback;
    }

    return (
      <img
        className={cx('', {}, [className, cls[objectFit]])}
        alt={alt}
        src={getSrc(src)}
        {...otherProps}
      />
    );
  },
);
