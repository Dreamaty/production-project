import { useTranslation } from 'react-i18next';

import { Mods } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { Profile } from '../../model/types/ProfileState';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../PorfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned';
import {
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ui/ProfileCardRedesigned';
import cls from './ProfileCard.module.scss';

export interface ProfileCardProps {
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
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const {
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
  } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedSkeleton />}
        off={
          <ProfileCardDeprecatedLoader className={className} />
        }
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedError />}
        off={
          <ProfileCardDeprecatedError className={className} />
        }
      />
    );
  }
  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
