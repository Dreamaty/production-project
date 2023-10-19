import {
	MutableRefObject, ReactNode, memo, useRef
} from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScrolle'
import cls from './Page.module.scss'

export const Page = memo(({ className, children, onScrollEnd }: {
	className?: string, 
	children: ReactNode
	onScrollEnd?: () => void
}) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
		
	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})
	return (
		<section 
			ref={wrapperRef} 
			className={cx(cls.page, {},
				[className])}
		>
			{children}
			<div ref={triggerRef} />
		</section>
	)
})