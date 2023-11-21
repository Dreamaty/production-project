import { cx } from '@/shared/lib/classNames/cx';
import { Loader } from '@/shared/ui/deprecated/Loader';

import cls from './PageLoader.module.scss';

export const PageLoader = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cx(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
