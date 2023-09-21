import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Modal } from 'shared/ui/Modal'
import cls from './Navbar.module.scss'

export const Navbar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModalOpen((prev) => !prev)
	}, [])

	return (
		<div className={cx(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Sign In')}
			</Button>
			<Modal isOpen={isAuthModalOpen} onClose={onToggleModal}></Modal>
		</div>
	)
}
