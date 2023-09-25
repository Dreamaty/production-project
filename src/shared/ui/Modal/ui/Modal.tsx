import {
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { Portal } from 'shared/ui/Portal/Portal'
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
	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback(
		(e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler],
	)
	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.closing]: isClosing,
	}
	if (lazy && !isMounted) return null

	return (
		<Portal>
			<div data-testid="modal" className={cx(cls.modal, mods, [className])}>
				<div
					data-testid="overlay"
					className={cls.overlay}
					onClick={closeHandler}
				>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
