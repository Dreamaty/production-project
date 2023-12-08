import { t } from 'i18next';
import { memo } from 'react';

import { getRouteArticleCreate } from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import {
  AppLink,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import {
  Button,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import {
  TextSize,
  TextTheme,
  UiText,
} from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { User } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';

import cls from '../Navbar.module.scss';

export const NavbarDeprecated = memo(
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
          <UiText
            className={cls.appName}
            title={t('Dream Project')}
            theme={TextTheme.INVERTED}
            size={TextSize.XL}
          />
          <AppLink
            to={getRouteArticleCreate()}
            theme={AppLinkTheme.SECONDARY}
          >
            {t('Create article')}
          </AppLink>
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
          theme={ButtonTheme.CLEAR_INVERTED}
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
