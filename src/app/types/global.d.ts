declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare const __IS_DEV__: boolean

declare const __API__: string

//Pictures
declare module '*.svg' {
	import React from 'react'
	const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	export default SVG
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;
