import { ReactNode } from 'react';

import { Mods, cx } from '@/shared/lib/classNames/cx';
import { toggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Modal.module.scss';

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}) => {
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };
  if (lazy && !isMounted) return null;

  const modalCls = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => cls.modalOld,
    on: () => cls.modalNew,
  });

  return (
    <Portal
      element={document.getElementById('app') ?? document.body}
    >
      <div
        data-testid='modal'
        className={cx(cls.modal, mods, [className, modalCls])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
