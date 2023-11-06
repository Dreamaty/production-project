import { cx } from '@/shared/lib/classNames/cx'
import React, { memo } from 'react'
import cls from './Icon.module.scss'

export enum BackgroundType {
	STROKE = 'stroke',
	FILL  = 'fill',
}

export enum BackgroundColor {
	SECONDARY_COLOR = 'Secondary',
	PRIMARY_COLOR = 'Primary'
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string, 
	Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
	backgroundType?: BackgroundType,
	backgroundColor?: BackgroundColor,
	pointer?: boolean
}

export const Icon = memo(({ 
	className, 
	Svg, 
	backgroundType = BackgroundType.FILL, 
	backgroundColor = BackgroundColor.PRIMARY_COLOR ,
	pointer,
	...otherProps
	
}:  IconProps) => {

	const param = `${backgroundType}${backgroundColor}`
		
	return (
		<Svg className={cx(cls[param], { [cls.pointer]: pointer },
			[className])} {...otherProps}/>
		
	)})