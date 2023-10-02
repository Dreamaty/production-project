import { getProfileReadonly, profileActions, updateProfileData } from 'entity/Profile'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { UiText } from 'shared/ui/Text'
import cls from './ProfilePageHeader.module.scss'

export const ProfilePageHeader = ({ className }: {
		className?: string,
	}) => {
	const { t } = useTranslation('profile')

	const readonly = useAppSelector(getProfileReadonly)
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.changeReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelChanging())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData())
	}, [dispatch])

	return (
		<div className={cx(cls.profilePageHeader, {},
			[className])}>
			<UiText title={t('Profile')}/>
			{
				readonly ?
					(<Button 
						theme={ButtonTheme.OUTLINE} 
						className={cls.editBtn} 
						onClick={onEdit}
					>
						{t('Edit')}
					</Button>)
					:
					(
						<>
							<Button 
								theme={ButtonTheme.OUTLINE} 
								className={cls.editBtn} 
								onClick={onSave}
							>
								{t('Save')}
							</Button>
							<Button 
								theme={ButtonTheme.OUTLINE_RED} 
								className={cls.saveBtn} 
								onClick={onCancelEdit}
							>
								{t('Cancel')}
							</Button>
						
						</>
					)
			}
		</div>
	)
}