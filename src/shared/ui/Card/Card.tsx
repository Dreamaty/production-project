import { HTMLAttributes, ReactNode, memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string, children: ReactNode
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
		
	return (
		<div className={cx(cls.card, {},
			[className])} {...otherProps} >
			{children}
		</div>
	)
})