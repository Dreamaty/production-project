/* eslint-disable max-len */
import { ArticleFilter, articleInfinityListReducer, fetchNextArticlesPage } from '@/features/Article'
import { cx } from '@/shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks'
import { Page } from '@/widgets/Page'
import { memo, useCallback } from 'react'
import { ArticleInfiniteList } from '../../../../features/Article/ArticleInfinityList/ui/ArticleInfiniteList/ArticleInfiniteList'
import cls from './ArticlesPage.module.scss'

const reducers: ReducersList = {
	articleInfiniteList: articleInfinityListReducer
}


const ArticlesPage = ({ className }: {className?: string}) => {

	const dispatch = useAppDispatch()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false} >
			<Page className={cx(cls.articlesPage, {},
				[className])} onScrollEnd={onLoadNextPart} >
				<ArticleFilter />
				<ArticleInfiniteList className={cls.list} />
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticlesPage)