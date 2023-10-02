import { CSSProperties, useMemo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Avatar.module.scss'

export const Avatar = ({ className, src, alt, size }: {
	className?: string
	src: string
	alt: string
	size?: number 
}) => {

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100
		}
	}, [size])
		
	return (
		<img src={src} alt={alt} className={cx(cls.avatar, {}, [className])} style={styles}/>
	)
}