import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Mods, cx } from '@/shared/lib/classNames/cx';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { UiInput } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';

import { ProfileCardProps } from '../../ProfileCard/ProfileCard';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify='center' max>
      <UiText
        variant='error'
        title={t('Did not succeed to load profile')}
        text={t('Try to refresh the page')}
        align='center'
      />
    </HStack>
  );
};

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding='24' max>
      <VStack gap='32' max>
        <HStack max justify='center'>
          <Skeleton border='100%' width={128} height={128} />
        </HStack>

        <HStack gap='32' max>
          <VStack gap='16' max>
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
          </VStack>
          <VStack gap='16' max>
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned = memo(
  ({
    className,
    data,
    error,
    isLoading,
    readonly = true,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
  }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const mods: Mods = {};
    return (
      <Card
        padding='24'
        max
        className={cx('', mods, [className])}
      >
        <VStack gap='32'>
          {data?.avatar && (
            <HStack justify='center' max>
              <Avatar
                alt='Profile Avatar'
                size={128}
                src={data.avatar}
              />
            </HStack>
          )}
          <HStack gap='24' max>
            <VStack gap='16' max>
              <UiInput
                value={data?.firstName}
                onChange={onChangeFirstName}
                label={t('First Name')}
                readonly={readonly}
              />

              <UiInput
                value={data?.lastName}
                onChange={onChangeLastName}
                label={t('Last Name')}
                readonly={readonly}
              />

              <UiInput
                value={data?.age}
                onChange={onChangeAge}
                label={t('Age')}
                readonly={readonly}
              />

              <UiInput
                value={data?.city}
                onChange={onChangeCity}
                label={t('City')}
                readonly={readonly}
              />
            </VStack>
            <VStack gap='16' max>
              <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
              />

              <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
              />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    );
  },
);
