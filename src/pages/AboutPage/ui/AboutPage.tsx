import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { GithubLink } from '@/features/GithubLink';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid={'AboutPage'}>
      <VStack gap='16'>
        <UiText
          title={t('About this project')}
          bold
          size='xlarge'
        />
        <UiText
          text={t('This project is made for my portfolio. ')}
          size='xlarge'
          variant='accent'
        />

        <UiText
          size='large'
          text={t(
            'In this project as architecture I used FSD. Core mods for this project is: ',
          )}
        />
        <UiText
          size='large'
          variant='accent'
          text={'Redux, React, Typescript, SCSS.'}
        />

        <HStack gap='32' align='start'>
          <UiText
            text={t(
              'All information about project in my github:',
            )}
          />
          <GithubLink href={'Dreamaty/production-project'} />
        </HStack>
      </VStack>
    </Page>
  );
};

export default AboutPage;
