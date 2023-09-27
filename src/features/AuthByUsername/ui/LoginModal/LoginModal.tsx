import { Suspense } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

export const LoginModal = ({
	className,
	isOpen,
	onClose,
}: {
	className?: string
	isOpen: boolean
	onClose: () => void
}) => {
	return (
		<Modal
			lazy
			isOpen={isOpen}
			onClose={onClose}
			className={cx(cls.loginModal, {}, [className])}
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	)
}
