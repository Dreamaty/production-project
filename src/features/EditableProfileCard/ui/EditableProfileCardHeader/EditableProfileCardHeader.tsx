import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { EditButton } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { UiText } from '@/shared/ui/deprecated/Text';

import { getUserAuthData } from '@/entities/User';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileStateActions } from '../../model/slice/profileStateSlice';

export const EditableProfileCardHeader = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation('profile');

    const readonly = useAppSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const authData = useAppSelector(getUserAuthData);
    const profileData = useAppSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
      dispatch(profileStateActions.changeReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileStateActions.cancelChanging());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData(profileData?.id));
    }, [dispatch, profileData?.id]);

    return (
      <HStack justify='between' align='start' max>
        <UiText title={t('Profile')} />
        {canEdit && (
          <EditButton
            readonly={readonly}
            onCancelEdit={onCancelEdit}
            onEdit={onEdit}
            onSave={onSave}
          />
        )}
      </HStack>
    );
  },
);
