import { cx } from '@/shared/lib/classNames/cx';

import cls from './Loader.module.scss';

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cx(cls.loader, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  );
};
