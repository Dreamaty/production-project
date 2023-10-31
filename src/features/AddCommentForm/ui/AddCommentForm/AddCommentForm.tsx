import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { UiInput } from 'shared/ui/Input'
import { HStack } from 'shared/ui/Stack'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
}

export interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void
}

const AddCommentForm = memo(({ className, onSendComment }:AddCommentFormProps) => {
	const { t } = useTranslation()

	const text = useAppSelector(getAddCommentFormText)
	const error = useAppSelector(getAddCommentFormError)
	const dispatch = useAppDispatch()

	const onCommentChangeHandler = useCallback((data: string) => {
		dispatch(addCommentFormActions.setText(data))
	}, [dispatch])

	const onSendHandler = useCallback(() => {
		onSendComment(text || '')
		onCommentChangeHandler('')
	}, [onCommentChangeHandler, onSendComment, text])


	

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<HStack max className={cx(cls.addCommentForm, {},
				[className])}>
				<UiInput 
					className={cls.input}
					placeholder={t('Type your comment')} 
					value={text} 
					onChange={onCommentChangeHandler}
				/>

				<Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
					{t('Send')}
				</Button>
			</HStack>
		</DynamicModuleLoader>
		
	)
})

export default AddCommentForm