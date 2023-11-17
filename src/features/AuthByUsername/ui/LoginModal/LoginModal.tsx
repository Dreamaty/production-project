import { Suspense } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

export const LoginModal = ({
  className,
  isOpen,
  onClose,
}: {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={cx('', {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
