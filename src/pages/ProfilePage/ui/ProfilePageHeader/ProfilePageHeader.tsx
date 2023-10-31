
import { getProfileData } from 'entity/ProfileState/model/selectors/getProfileData/getProfileData'

import { getProfileReadonly, profileStateActions, updateProfileData } from 'entity/ProfileState'
import { getUserAuthData } from 'entity/User'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { EditButton } from 'shared/ui/Button/ui/EditButton/EditButton'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { UiText } from 'shared/ui/Text'

export const ProfilePageHeader = memo(({ className }: {
		className?: string,
	}) => {
	const { t } = useTranslation('profile')

	const readonly = useAppSelector(getProfileReadonly)
	const dispatch = useAppDispatch()

	const authData = useAppSelector(getUserAuthData)
	const profileData = useAppSelector(getProfileData)
	const canEdit = authData?.id === profileData?.id

	const onEdit = useCallback(() => {
		dispatch(profileStateActions.changeReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileStateActions.cancelChanging())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData(profileData?.id))
	}, [dispatch, profileData?.id])

	return (
		<HStack justify='between' align='start' max>
			<UiText title={t('Profile')}/>
			{canEdit && (
				<EditButton 
					readonly={readonly} 
					onCancelEdit={onCancelEdit}
					onEdit={onEdit}
					onSave={onSave}
				/>
				
			)}
		</HStack>
	)
})