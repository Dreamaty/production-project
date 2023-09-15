import { ButtonHTMLAttributes, FC } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	theme,
	...otherProps
}) => {
	return (
		<button
			type="button"
			className={cx(cls.button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
