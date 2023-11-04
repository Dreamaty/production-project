import { memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Icon.module.scss'

export enum BackgroundType {
	STROKE = 'stroke',
	FILL  = 'fill',
}

export enum BackgroundColor {
	SECONDARY_COLOR = 'Secondary',
	PRIMARY_COLOR = 'Primary'
}

export const Icon = memo(({ 
	className, 
	Svg, 
	backgroundType = BackgroundType.FILL, 
	backgroundColor = BackgroundColor.PRIMARY_COLOR 
}: {
	className?: string, 
	Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	backgroundType?: BackgroundType
	backgroundColor?: BackgroundColor
}) => {

	const param = `${backgroundType}${backgroundColor}`
		
	return (
		<Svg className={cx(cls[param], {},
			[className])}/>
		
	)})