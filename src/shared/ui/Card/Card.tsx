import { cx } from '@/shared/lib/classNames/cx'
import { HTMLAttributes, ReactNode, memo } from 'react'
import cls from './Card.module.scss'

export enum CardTheme {
	NORMAL = 'normal',
	OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string, children: ReactNode
	theme?: CardTheme
	max?: boolean
}

export const Card = memo(({ 
	className, 
	children, 
	theme = 
	CardTheme.NORMAL, 
	max,
	...otherProps 
}: CardProps) => {
		
	return (
		<div 
			className={cx(cls.card, { [cls.max]: max }, [className, cls[theme]])} 
			{...otherProps} 
		>
			{children}
		</div>
	)
})