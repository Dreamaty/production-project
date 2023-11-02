import { getUserAuthData, userActions } from 'entity/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import {
	useAppDispatch,
	useAppSelector,
} from 'shared/lib/hooks/storeHooks/storeHooks'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { TextSize, TextTheme, UiText } from 'shared/ui/Text'
import cls from './Navbar.module.scss'

export const Navbar = memo(({ className }: { className?: string }) => {
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
			<header className={cx(cls.navbar, {}, [className])}>
				<UiText 
					className={cls.appName} 
					title={t('Dream Project')} 
					theme={TextTheme.INVERTED} 
					size={TextSize.XL}
				/>
				<AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
					{t('Create article')}
				</AppLink>
				<Dropdown 
					className={cls.links}
					items={[
						{
							content: t('Profile'),
							href: RoutePath.profile + authData.id
						},
						{
							content: t('Sign Out'),
							onClick: onLogOut
						}
					]} 
					trigger={
						<Avatar 
							src={authData.avatar} 
							size={30} 
							alt={'user avatar'}
						/>
					} 
				/>
			</header>
		)
	}

	return (
		<header className={cx(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Sign In')}
			</Button>
			{isAuthModalOpen && (
				<LoginModal 
					isOpen={isAuthModalOpen} 
					onClose={onCloseModal} 
				/>
			)}
		</header>
	)
})
