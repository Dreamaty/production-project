/* eslint-disable max-len */
import { ArticleList, ArticleView } from 'entity/Article'
import { ArticleViewSwitcher } from 'features/Article/ArticleViewSwitcher'
import { memo, useCallback, useEffect } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
}


const ArticlesPage = ({ className }: {className?: string}) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if(__PROJECT__ !== 'storybook') {
			dispatch(fetchArticlesList())
			dispatch(articlesPageActions.initState())
		}
	}, [dispatch])

	

	const onChangeView = useCallback((newView: ArticleView) => dispatch(articlesPageActions.setView(newView)), [dispatch])

	const articles = useAppSelector(getArticles.selectAll) 
	const articlesView = useAppSelector(getArticlesView)
	const isArticlesLoading = useAppSelector(getArticlesIsLoading)
	const articlesError = useAppSelector(getArticlesError)

	return (
		<DynamicModuleLoader reducers={reducers} >
			<div className={cx(cls.articlesPage, {},
				[className])}>
				<ArticleViewSwitcher onViewClick={onChangeView} view={articlesView} className={cls.viewSwitcher}/>
				<ArticleList articles={articles} view={articlesView} isLoading={isArticlesLoading} />
			</div>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticlesPage)