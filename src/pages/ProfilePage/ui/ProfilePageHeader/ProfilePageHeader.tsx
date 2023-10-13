import { getProfileReadonly, profileActions, updateProfileData } from 'entity/Profile'
import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData'
import { getUserAuthData } from 'entity/User'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { EditButton } from 'shared/ui/Button/ui/EditButton/EditButton'
import { UiText } from 'shared/ui/Text'
import cls from './ProfilePageHeader.module.scss'

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
		dispatch(profileActions.changeReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelChanging())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData(profileData?.id))
	}, [dispatch, profileData?.id])

	return (
		<div className={cx(cls.profilePageHeader, {},
			[className])}>
			<UiText title={t('Profile')}/>
			{canEdit && (
				<div className={cls.editBtn}>
					<EditButton 
						readonly={readonly} 
						onCancelEdit={onCancelEdit}
						onEdit={onEdit}
						onSave={onSave}
					/>
				</div>
			)}
		</div>
	)
})