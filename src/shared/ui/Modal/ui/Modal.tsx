import {
	ReactNode
} from 'react'
import { Mods, cx } from '@/shared/lib/classNames/cx'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../../Overlay/Overlay'
import { Portal } from '../../Portal/Portal'
import cls from './Modal.module.scss'


const ANIMATION_DELAY = 300

export const Modal = ({
	className,
	children,
	isOpen,
	onClose,
	lazy,
}: {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}) => {
	
	const {
		close,
		isClosing,
		isMounted
	} = useModal({ animationDelay: ANIMATION_DELAY, isOpen, onClose })

	const mods: Mods = {
		[ cls.opened ]: isOpen,
		[ cls.closing ]: isClosing,
	}
	if (lazy && !isMounted) return null

	return (
		<Portal>
			<div data-testid="modal" className={cx(cls.modal, mods, [className])}>
				<Overlay onClick={close}/>
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	)
}
