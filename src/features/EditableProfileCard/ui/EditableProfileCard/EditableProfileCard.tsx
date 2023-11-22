import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextTheme, UiText } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/ProfileState';

import { useProfile } from '../../hooks/useProfile';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
  profileStateActions,
  profileStateReducer,
} from '../../model/slice/profileStateSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

const reducers: ReducersList = {
  profile: profileStateReducer,
};

export const EditableProfileCard = memo(
  ({ className, id }: { className?: string; id: string }) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchProfileData(id));
    });

    const { data, error, isLoading, readonly, validateErrors } =
      useProfile();

    const onChangeFirstName = useCallback(
      (value?: string) => {
        dispatch(
          profileStateActions.updateProfile({
            firstName: value || '',
          }),
        );
      },
      [dispatch],
    );

    const onChangeLastName = useCallback(
      (value?: string) => {
        dispatch(
          profileStateActions.updateProfile({
            lastName: value || '',
          }),
        );
      },
      [dispatch],
    );

    const onChangeAge = useCallback(
      (value?: string) => {
        dispatch(
          profileStateActions.updateProfile({
            age: Number(value || 0),
          }),
        );
      },
      [dispatch],
    );

    const onChangeCountry = useCallback(
      (country?: Country) => {
        dispatch(
          profileStateActions.updateProfile({
            country: country,
          }),
        );
      },
      [dispatch],
    );

    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(
          profileStateActions.updateProfile({
            city: value || '',
          }),
        );
      },
      [dispatch],
    );

    const onChangeCurrency = useCallback(
      (currency?: Currency) => {
        dispatch(
          profileStateActions.updateProfile({
            currency: currency,
          }),
        );
      },
      [dispatch],
    );

    return (
      <DynamicModuleLoader reducers={reducers}>
        <VStack gap='8' max className={cx('', {}, [className])}>
          <EditableProfileCardHeader />
          {validateErrors?.length &&
            validateErrors.map(error => (
              <UiText
                key={error}
                theme={TextTheme.ERROR}
                text={t(error)}
              />
            ))}
          <ProfileCard
            data={data}
            error={error}
            isLoading={isLoading}
            readonly={readonly}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  },
);
