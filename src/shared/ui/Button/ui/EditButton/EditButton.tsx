import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button, ButtonTheme } from '../Button'
import cls from './EditButton.module.scss'

export const EditButton = memo(({ 
	className, 
	readonly,
	onCancelEdit,
	onEdit,
	onSave
}: {
	className?: string, 
	readonly: boolean,
	onEdit: () => void,
	onSave: () => void,
	onCancelEdit: () => void
}) => {
	const { t } = useTranslation()
	return (
		<div className={cx(cls.editButton, {},
			[className])}>
			{
				readonly ?
					(<Button 
						theme={ButtonTheme.OUTLINE} 
						className={cls.editButton} 
						onClick={onEdit}
					>
						{t('Edit')}
					</Button>)
					:
					(
						<>
							<Button 
								theme={ButtonTheme.OUTLINE} 
								className={cls.editButton} 
								onClick={onSave}
							>
								{t('Save')}
							</Button>
							<Button 
								theme={ButtonTheme.OUTLINE_RED} 
								className={cls.saveButton} 
								onClick={onCancelEdit}
							>
								{t('Cancel')}
							</Button>
						
						</>
					)
			}
		</div>
	)
})