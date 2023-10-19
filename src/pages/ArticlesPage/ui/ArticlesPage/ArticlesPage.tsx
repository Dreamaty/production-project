/* eslint-disable max-len */
import { ArticleList, ArticleView } from 'entity/Article'
import { ArticleViewSwitcher } from 'features/Article/ArticleViewSwitcher'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { memo, useCallback } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from 'shared/ui/Page/Page'
import {
	getArticlesIsLoading,
	getArticlesView
} from '../../model/selectors/articles'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
}


const ArticlesPage = ({ className }: {className?: string}) => {

	const dispatch = useAppDispatch()
	
	const articles = useAppSelector(getArticles.selectAll) 
	const articlesView = useAppSelector(getArticlesView)
	const isArticlesLoading = useAppSelector(getArticlesIsLoading)
	
	const onChangeView = useCallback((newView: ArticleView) => dispatch(articlesPageActions.setView(newView)), [dispatch])
	

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])


	useInitialEffect(() => {
		dispatch(articlesPageActions.initState())
		dispatch(fetchArticlesList({
			page: 1
		}))
	})
	//useEffect(() => {
	//	if(__PROJECT__ !== 'storybook') {
			
	//	}
	//}, [dispatch])


	return (
		<DynamicModuleLoader reducers={reducers} >
			<Page className={cx(cls.articlesPage, {},
				[className])} onScrollEnd={onLoadNextPart} >
				<ArticleViewSwitcher onViewClick={onChangeView} view={articlesView} className={cls.viewSwitcher}/>
				<ArticleList articles={articles} view={articlesView} isLoading={isArticlesLoading} />
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticlesPage)