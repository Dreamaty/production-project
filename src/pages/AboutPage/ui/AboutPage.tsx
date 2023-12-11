import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { GithubLink } from '@/features/GithubLink';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid={'AboutPage'}>
      <VStack gap='8'>
        <UiText title='About this project' bold size='large' />
        <UiText
          text={'	This project is made for my portfolio. '}
          size='large'
          variant='accent'
        />
        <HStack gap='8'>
          <UiText
            text={
              '	In this project as architecture I used FSD. Core mods for this project is '
            }
          />
          <UiText
            variant='accent'
            text={'Redux, React, Typescript, SCSS. '}
          />
        </HStack>
        <HStack gap='8' align='start'>
          <UiText
            text={'All information about project in my github:'}
          />
          <GithubLink href={'Dreamaty/production-project'} />
        </HStack>
      </VStack>
    </Page>
  );
};

export default AboutPage;
