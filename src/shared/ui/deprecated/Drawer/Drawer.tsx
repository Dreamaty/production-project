import { ReactNode, memo, useCallback, useEffect } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';

import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

//TODO: closing animation

/**
 *  @deprecated
 */
export const DrawerContent = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;

  const { Spring, Gesture } = useAnimationLibs();
  const { useDrag } = Gesture;
  const { config, useSpring, animated } = Spring;

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTabs: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to(py => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={cx(cls.drawer, {}, [className])}>
        <Overlay onClick={close} />
        <animated.div
          className={cls.sheet}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px`,
            y,
          }}
          {...bind()}
        >
          {children}
        </animated.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
