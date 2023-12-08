import { useTranslation } from 'react-i18next';

import { UiText } from '@/shared/ui/redesigned/Text';

import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid={'AboutPage'}>
      <UiText title='About this project' bold size='large' />
      <UiText text={''} />
    </Page>
  );
};

export default AboutPage;
