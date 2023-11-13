import {
	getUserAuthData
} from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import { getRouteArticleCreate } from '@/shared/const/router'
import { cx } from '@/shared/lib/classNames/cx'
import {
	useAppSelector
} from '@/shared/lib/hooks/storeHooks/storeHooks'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { TextSize, TextTheme, UiText } from '@/shared/ui/Text'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

export const Navbar = memo(({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const authData = useAppSelector(getUserAuthData)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)


	const onShowModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])



	if (authData) {
		return (
			<header className={cx(cls.navbar, {}, [className])}>
				<UiText 
					className={cls.appName} 
					title={t('Dream Project')} 
					theme={TextTheme.INVERTED} 
					size={TextSize.XL}
				/>
				<AppLink to={getRouteArticleCreate()} theme={AppLinkTheme.SECONDARY}>
					{t('Create article')}
				</AppLink>
				<HStack gap='16' className={cls.actions}>
					<NotificationButton/>
					<AvatarDropdown/>
				</HStack>
				
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
