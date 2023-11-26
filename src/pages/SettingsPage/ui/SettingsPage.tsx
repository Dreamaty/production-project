import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';
import { Page } from '@/widgets/Page';

const SettingsPage = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    return (
      <Page className={className}>
        <VStack gap='16'>
          <UiText title={t('User settings')} />
          <UiDesignSwitcher />
        </VStack>
      </Page>
    );
  },
);

export default SettingsPage;
