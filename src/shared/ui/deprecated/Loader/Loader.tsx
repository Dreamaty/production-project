import { cx } from '@/shared/lib/classNames/cx';

import cls from './Loader.module.scss';

/**
 *  @deprecated
 */
export const Loader = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cx(cls.loader, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  );
};
