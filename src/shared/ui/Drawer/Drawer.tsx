import { memo, ReactNode } from 'react'

import { cx, Mods } from 'shared/lib/classNames/cx'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
		lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
	const {
		className,
		children,
		onClose,
		isOpen,
		lazy,
	} = props


	const {
		close,
		isClosing,
		isMounted
	} = useModal({ animationDelay: 300, isOpen, onClose })

	const mods: Mods = {
		[ cls.opened ]: isOpen,
		[ cls.closing ]: isClosing,
	}
	if (lazy && !isMounted) return null


	return (
		<Portal>
			<div className={cx(cls.drawer, mods, [className])}>
				<Overlay onClick={close} />
				<div
					className={cls.content}
				>
					{children}
				</div>
			</div>
		</Portal>
	)
})
