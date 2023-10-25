/* eslint-disable max-len */
import { ArticleList } from 'entity/Article'
import { ArticleFilter } from 'features/Article/ArticleSort'
import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from 'widgets/Page/Page'
import {
	getArticlesIsLoading, getArticlesView
} from '../../model/selectors/articles'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
}


const ArticlesPage = ({ className }: {className?: string}) => {

	const dispatch = useAppDispatch()
	
	const articles = useAppSelector(getArticles.selectAll) 
	const articlesView = useAppSelector(getArticlesView)
	const isArticlesLoading = useAppSelector(getArticlesIsLoading)

	const [searchParams] = useSearchParams()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])


	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false} >
			<Page className={cx(cls.articlesPage, {},
				[className])} onScrollEnd={onLoadNextPart} >
				<ArticleFilter />
				<ArticleList 
					articles={articles} 
					view={articlesView} 
					isLoading={isArticlesLoading} 
					className={cls.list}
				/>
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticlesPage)