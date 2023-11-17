import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <Page data-testid='MainPage'>
      {t('Main')}
      <RatingCard
        title='How was this Article?'
        feedbackTitle='Write your feedback about article'
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
