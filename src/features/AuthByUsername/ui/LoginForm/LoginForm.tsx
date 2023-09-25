import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'

export const LoginForm = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className={cx(cls.loginForm, {}, [className])}>
			<Input
				type="text"
				placeholder={t('Login')}
				value={login}
				autoFocus
				onChange={(val) => setLogin(val)}
			/>

			<Input
				type="text"
				placeholder={t('Password')}
				value={password}
				onChange={(val) => {
					setPassword(val)
				}}
			/>

			<Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
				{t('Sign In')}
			</Button>
		</div>
	)
}
