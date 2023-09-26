import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export const LoginForm = memo(function LoginForm({
	className,
}: {
	className?: string
}) {
	const { t } = useTranslation()

	const dispatch = useAppDispatch()
	const { username, password, isLoading, error } = useSelector(getLoginState)

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

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, username, password])

	return (
		<div className={cx(cls.loginForm, {}, [className])}>
			<Text title={t('Authorization form')} />
			{error && <Text theme={TextTheme.ERROR} text={error} />}
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
	)
})
