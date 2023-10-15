import { memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './UiText.module.scss'

export enum TextTheme {
	PRIMARY = 'default',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center'
}

export enum TextSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

export const UiText = memo(({
	className,
	title,
	text,
	align = TextAlign.LEFT,
	theme = TextTheme.PRIMARY,
	size = TextSize.M
}: {
	className?: string
	title?: string
	text?: string | number
	align?: TextAlign
	theme?: TextTheme
	size?: TextSize
}) => {
	return (
		<div className={cx(cls.textWrapper, {}, 
			[ 
				className, cls[theme], cls[align], cls[size] 
			])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
})
