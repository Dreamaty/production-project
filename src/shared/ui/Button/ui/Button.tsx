import { ButtonHTMLAttributes, FC } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	theme,
	square,
	size,
	...otherProps
}) => {
	const mods: Record<string, boolean> = {
		[cls.square]: square,
	}
	return (
		<button
			type="button"
			className={cx(cls.button, mods, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
