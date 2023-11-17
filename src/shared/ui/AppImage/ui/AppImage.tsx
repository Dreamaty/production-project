import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

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

    if (isLoading && fallback) {
      return fallback;
    }

    if (hasError && errorFallback) {
      return errorFallback;
    }

    return (
      <img
        className={className}
        alt={alt}
        src={src}
        {...otherProps}
      />
    );
  },
);
