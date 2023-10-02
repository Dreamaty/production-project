import { memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'default',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center'
}

export const UiText = memo(({
	className,
	title,
	text,
	align = TextAlign.LEFT,
	theme = TextTheme.PRIMARY,
}: {
	className?: string
	title?: string
	text?: string
	align?: TextAlign
	theme?: TextTheme
}) => {
	return (
		<div className={cx(cls.textWrapper, {}, [className, cls[theme],cls[align] ])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
})
