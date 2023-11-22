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

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';

import { Profile } from '../../model/types/ProfileState';
import cls from './ProfileCard.module.scss';

export const ProfileCard = ({
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
}: {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCountry?: (value?: Country) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCurrency?: (currnecy?: Currency) => void;
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify='center'
        max
        className={cx(cls.profileCard, {}, [className])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
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
  }
  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap='16'
      max
      className={cx(cls.profileCard, mods, [className])}
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
};
