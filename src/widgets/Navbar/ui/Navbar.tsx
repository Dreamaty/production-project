import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks';

import { getUserAuthData } from '@/entities/User';

import { OldNavbar } from './Deprecated/OldNavbar';
import { NewNavbar } from './NewNavbar/NewNavbar';

export const Navbar = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const authData = useAppSelector(getUserAuthData);
    const [isAuthModalOpen, setIsAuthModalOpen] =
      useState(false);

    const onShowModal = useCallback(() => {
      setIsAuthModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
      setIsAuthModalOpen(false);
    }, []);

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <NewNavbar
            isAuthModalOpen={isAuthModalOpen}
            authData={authData}
            onCloseModal={onCloseModal}
            onShowModal={onShowModal}
          />
        }
        off={
          <OldNavbar
            isAuthModalOpen={isAuthModalOpen}
            authData={authData}
            onCloseModal={onCloseModal}
            onShowModal={onShowModal}
          />
        }
      />
    );
  },
);
