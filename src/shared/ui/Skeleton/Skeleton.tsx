import { CSSProperties, memo } from 'react'
import { cx } from '@/shared/lib/classNames/cx'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
	className?: string
	height?: string | number
	width?: string | number
	border?: string 

}

export const Skeleton = memo((props: SkeletonProps) => {
	const { 
		className,
		height,
		width,
		border
	} = props

	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border
	}
		
	return (
		<div 
			className={cx(cls.skeleton, {},
				[className])}
			style={styles}
		/>

		
	)
})
	