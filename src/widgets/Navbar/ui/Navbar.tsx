import { getUserAuthData, userActions } from 'entity/User'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	useAppDispatch,
	useAppSelector,
} from 'shared/hooks/storeHooks/storeHooks'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './Navbar.module.scss'

export const Navbar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const authData = useAppSelector(getUserAuthData)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
	const dispatch = useAppDispatch()

	const onShowModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const onLogOut = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<div className={cx(cls.navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={cls.links}
					onClick={onLogOut}
				>
					{t('Log Out')}
				</Button>
			</div>
		)
	}

	return (
		<div className={cx(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Sign In')}
			</Button>
			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
		</div>
	)
}
