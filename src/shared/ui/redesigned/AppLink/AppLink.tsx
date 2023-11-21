import { ReactNode, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  }: AppLinkProps) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          cx(cls.appLink, { [activeClassName]: isActive }, [
            className,
            cls[variant],
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
