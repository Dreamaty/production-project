import { cx } from 'shared/lib/classNames/cx'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
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
			<LoginForm />
		</Modal>
	)
}
