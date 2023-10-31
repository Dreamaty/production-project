import { StateSchema } from 'app/providers/StoreProvider'
import { getSavedScrollByPath, scrollSaveActions } from 'features/ScrollSave'
import {
	MutableRefObject, ReactNode, UIEvent, memo, useRef
} from 'react'
import { useLocation } from 'react-router'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import cls from './Page.module.scss'

export const PAGE_ID = 'page_id' 

export const Page = memo(({ className, children, onScrollEnd }: {
	className?: string, 
	children: ReactNode
	onScrollEnd?: () => void
}) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const location = useLocation()
	const scrollPosition = useAppSelector(
		(state: StateSchema) => getSavedScrollByPath(state, location.pathname)
	)
		
	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(scrollSaveActions.setScrollPosition({
			path: location.pathname,
			position: e.currentTarget.scrollTop
		}))
	}, 500)

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition
	})

	return (
		<section 
			ref={wrapperRef} 
			className={cx(cls.page, {},
				[className])}
			onScroll={onScroll}
			id={PAGE_ID}
		>
			{children}
			<div className={cls.trigger} ref={triggerRef} />
		</section>
	)
})