/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { GithubLink } from '@/features/GithubLink';
import { LinkedinLink } from '@/features/LinkedinLink';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <Page data-testid='MainPage'>
      <HStack align='start' justify='start' gap='32'>
        <div className='profileImageWrapper'>
          <AppImage src='images/profilePic.jpg' height={1080} />
        </div>
        <Card padding='24'>
          <VStack gap='16'>
            <UiText
              variant='accent'
              title={t('Hi, my name is Michael.')}
              size='large'
              bold
            />
            <UiText
              text={t(
                "I'm  a Passionate Front-End Developer Specializing in React. Holon, Israel",
              )}
              size='large'
            />
            <UiText
              text={t('My journey in technology began with')}
              size='medium'
            />
            <HStack gap='16'>
              <GithubLink />
              <LinkedinLink />
            </HStack>
          </VStack>
        </Card>
      </HStack>
    </Page>
  );
};

export default MainPage;
