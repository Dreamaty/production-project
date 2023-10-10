import { memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Icon.module.scss'

export enum BackgroundType {
	STROKE = 'stroke',
	FILL  = 'fill',
}

export const Icon = memo(({ className, Svg, backgroundType = BackgroundType.FILL }: {
	className?: string, 
	Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	backgroundType?: BackgroundType
}) => {
		
	return (
		<Svg className={cx(cls[backgroundType], {},
			[className])}/>
		
	)})