import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './Navbar.module.scss'

export const Navbar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	const onOpenModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	return (
		<div className={cx(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onOpenModal}
			>
				{t('Sign In')}
			</Button>
			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
		</div>
	)
}
