import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cx } from 'shared/lib/classNames/cx'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
}

const LoginForm = memo(function LoginForm({
	className,
	onSuccess
}: LoginFormProps) {
	const { t } = useTranslation()

	const dispatch = useAppDispatch()

	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch],
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch],
	)

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))
		if( result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [onSuccess,dispatch, username, password])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={cx(cls.loginForm, {}, [className])}>
				<Text title={t('Authorization form')} />
				{error && <Text theme={TextTheme.ERROR} text={t(error)} />}
				<Input
					type="text"
					placeholder={t('Login')}
					value={username}
					autoFocus
					onChange={onChangeUsername}
				/>

				<Input
					type="text"
					placeholder={t('Password')}
					value={password}
					onChange={onChangePassword}
				/>

				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.loginBtn}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('Sign In')}
				</Button>
			</div>
		</DynamicModuleLoader>
	)
})

export default LoginForm
