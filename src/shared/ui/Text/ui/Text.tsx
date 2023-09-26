import { cx } from 'shared/lib/classNames/cx'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'default',
	ERROR = 'error',
}

export const Text = ({
	className,
	title,
	text,
	theme = TextTheme.PRIMARY,
}: {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}) => {
	return (
		<div className={cx(cls.textWrapper, {}, [className, cls[theme]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
