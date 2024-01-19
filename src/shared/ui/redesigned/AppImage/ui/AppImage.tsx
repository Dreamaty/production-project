import { AdvancedImage } from '@cloudinary/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { useCloudinary } from '@/shared/lib/hooks/useCloudinary/useCloudinary';

import cls from './AppImage.module.scss';

type ObjectFit = 'cover' | 'fill' | 'contain' | 'none';

type HTMLImageAttributes = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'width' | 'height'
>;

interface AppImageProps extends HTMLImageAttributes {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
  objectFit?: ObjectFit;
  width?: number | string;
  height?: number | string;
}

export const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    objectFit = 'cover',
    width = 200,
    height = 200,
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const cloud = useCloudinary();

    useLayoutEffect(() => {
      const img = new Image();

      img.src = src ?? '';

      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setHasError(true);
      };
    }, [src]);

    //if image needs to load from cloudinary
    if (src?.startsWith('images/')) {
      const img = cloud?.image(src);

      img?.resize(thumbnail().height(height));

      if (img)
        return (
          <AdvancedImage
            cldImg={img}
            alt={alt}
            className={cx(cls.cloudImage, {}, [
              className,
              cls[objectFit],
            ])}
          />
        );
    }

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
        src={src}
        width={width}
        height={height}
        {...otherProps}
      />
    );
  },
);
