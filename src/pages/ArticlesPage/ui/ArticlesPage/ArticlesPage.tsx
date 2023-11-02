/* eslint-disable max-len */
import { ArticleFilter } from 'features/Article/ArticleSort'
import { memo, useCallback } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import cls from './ArticlesPage.module.scss'

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
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