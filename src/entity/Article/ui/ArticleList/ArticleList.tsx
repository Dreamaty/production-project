import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BLOCKS ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
	))

	
export const ArticleList = memo((
	{ 
		className, 
		articles,
		view = ArticleView.BLOCKS,
		isLoading
	}: {
	className?: string, 
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
}) => {
	const { t } = useTranslation('article')



	// eslint-disable-next-line react-hooks/rules-of-hooks
	const renderArticles = (article: Article) => (
		<ArticleListItem key={article.id} article={article} view={view} className={cls.card} />
	)
		
	return (
		<div className={cx(cls.articleList, {},
			[className, cls[view]])}>
			{articles.length > 0 
				?(	
					
					articles.map(renderArticles)
							
				)
				: null
			}
			{isLoading && getSkeletons(view)}
		</div>
	)
})