import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Mods, cx } from '@/shared/lib/classNames/cx';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { UiInput } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  TextAlign,
  TextTheme,
  UiText,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = ({
  className,
}: {
  className?: string;
}) => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify='center' max>
      <UiText
        theme={TextTheme.ERROR}
        title={t('Did not succeed to load profile')}
        text={t('Try to refresh the page')}
        align={TextAlign.CENTER}
        className={cx(cls.profileCard, {}, [className])}
      />
    </HStack>
  );
};
export const ProfileCardDeprecatedLoader = ({
  className,
}: {
  className?: string;
}) => (
  <HStack
    justify='center'
    max
    className={cx(cls.profileCard, {}, [className])}
  >
    <Loader />
  </HStack>
);

export const ProfileCardDeprecated = memo(
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
    const mods: Mods = {
      [cls.editing]: !readonly,
    };

    return (
      <VStack
        gap='16'
        max
        className={cx(cls.profileCardDeprecated, mods, [
          className,
        ])}
      >
        {data?.avatar && (
          <HStack justify='center' max>
            <Avatar
              alt='Profile Avatar'
              size={100}
              src={data.avatar}
            />
          </HStack>
        )}

        <UiInput
          value={data?.firstName}
          onChange={onChangeFirstName}
          placeholder={t('Your Name')}
          className={cls.input}
          readonly={readonly}
        />

        <UiInput
          value={data?.lastName}
          onChange={onChangeLastName}
          placeholder={t('Your Last Name')}
          className={cls.input}
          readonly={readonly}
        />

        <UiInput
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('Your Age')}
          className={cls.input}
          readonly={readonly}
        />

        <UiInput
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('Your City')}
          className={cls.input}
          readonly={readonly}
        />

        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />

        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
      </VStack>
    );
  },
);
