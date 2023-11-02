import { ArticleList } from 'entity/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { UiText } from 'shared/ui/Text'
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticleInfiniteList.module.scss'

export const ArticleInfiniteList = memo(({ className }: {
	className?: string, 
}) => {
	const { t } = useTranslation('article')


	const dispatch = useAppDispatch()
	
	const articles = useAppSelector(getArticles.selectAll) 
	const articlesView = useAppSelector(getArticlesView)
	const isArticlesLoading = useAppSelector(getArticlesIsLoading)
	const error = useAppSelector(getArticlesError)

	const [searchParams] = useSearchParams()

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})

	if(error) {
		return <UiText text={t('An error ocured after tring to load articles')} />
	}	

	return (
		<div className={cx(cls.articleInfiniteList, {},
			[className])}>
			<ArticleList 
				articles={articles} 
				view={articlesView} 
				isLoading={isArticlesLoading} 
				className={className}
			/>
		</div>
	)
})