import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { UiText } from '@/shared/ui/Text';

import {
  saveJsonSettings,
  useJsonSettings,
} from '@/entities/User';

export const ArticlesPageGreeting = memo(() => {
  const { t } = useTranslation('article');

  const { isArticlesPageWasViewed } = useJsonSettings();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasViewed) {
      setIsOpen(true);
      dispatch(
        saveJsonSettings({ isArticlesPageWasViewed: true }),
      );
    }
  }, [dispatch, isArticlesPageWasViewed]);

  const onClose = () => setIsOpen(false);

  const text = (
    <UiText
      title={t('Welcome to the articles page')}
      text={t('Here you can watch articles on different topics')}
    />
  );

  if (isMobile) {
    return (
      <Drawer onClose={onClose} isOpen={isOpen} lazy>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
