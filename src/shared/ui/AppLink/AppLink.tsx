import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  }: AppLinkProps) => {
    return (
      <Link
        to={to}
        className={cx(cls.appLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  },
);
