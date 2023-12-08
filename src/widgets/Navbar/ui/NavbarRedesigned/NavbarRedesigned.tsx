import { t } from 'i18next';
import { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { User } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';

import cls from './NavbarRedesigned.module.scss';

export const NavbarRedesigned = memo(
  ({
    className,
    authData,
    isAuthModalOpen,
    onCloseModal,
    onShowModal,
  }: {
    className?: string;
    authData?: User;
    isAuthModalOpen?: boolean;
    onCloseModal: () => void;
    onShowModal: () => void;
  }) => {
    if (authData) {
      return (
        <header className={cx(cls.navbar, {}, [className])}>
          <HStack gap='16' className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      );
    }

    return (
      <header className={cx(cls.navbar, {}, [className])}>
        <Button
          variant='clear'
          className={cls.links}
          onClick={onShowModal}
        >
          {t('Sign In')}
        </Button>
        {isAuthModalOpen && (
          <LoginModal
            isOpen={isAuthModalOpen}
            onClose={onCloseModal}
          />
        )}
      </header>
    );
  },
);
