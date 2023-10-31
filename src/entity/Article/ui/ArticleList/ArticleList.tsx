import {
	HTMLAttributeAnchorTarget,
	memo
} from 'react'
import { useTranslation } from 'react-i18next'
import { VirtuosoGrid } from 'react-virtuoso'
import { cx } from 'shared/lib/classNames/cx'
import { UiText } from 'shared/ui/Text'
import { PAGE_ID } from 'widgets/Page/Page'
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
		isLoading,
		target
	}: {
	className?: string, 
	articles: Article[]
	isLoading?: boolean
	view?: ArticleView
	target?: HTMLAttributeAnchorTarget
}) => {
	const { t } = useTranslation('article')

	const isList = view === ArticleView.LIST

	const itemsPerRow = isList ? 1 : 3
	const rowCount =  Math.ceil(articles.length / itemsPerRow)


	//// eslint-disable-next-line react-hooks/rules-of-hooks
	//const renderArticles = (article: Article) => (
	//	<ArticleListItem 
	//		key={article.id} 
	//		article={article} 
	//		view={view} 
	//		className={cls.card} 
	//		target={target}
	//	/>
	//)

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const renderArticlesVirtualized = (
		index: number, article: Article
	) => {



		
	
		return (
			<div key={index}	className={cls.row}>
				<ArticleListItem 
					article={article}
					view={view}
					target={target}
					key={article.id}
					className={cls.card}
				/>
			</div>
		)}


	if(!isLoading && !articles.length) {
		return (
			<div className={cx(cls.articleList, {},
				[className, cls[view]])}>
				<UiText title={t('Articles doesnt found')} />
			</div>
		)
	}
		
	return (

	// TODO: List virtualization

		<VirtuosoGrid
			style={{ height: '100%' }}
			totalCount={articles.length}
			data={articles}
			customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
			itemContent={renderArticlesVirtualized}
			
		>
		
		</VirtuosoGrid>

	//<div style={{ display: 'flex', flexGrow: 1, height: '100%', width: '100%' }}>
	//	<AutoSizer>
	//		{({ width, height }: {
	//		width: number, height: number
	//	}) => (
				
	//			//<div
	//			//	className={cx(cls.articleList, {},
	//			//		[className, cls[view]])}
	//			//>
					
	//			<FixedSizeList 
	//				height={height ?? 700}
	//				width={width ? width - 80 : 700}
	//				itemCount={rowCount}
	//				itemSize={700}

	//			>
	//				{renderArticlesVirtualized}
	//			</FixedSizeList>
	//			//{isLoading && getSkeletons(view)}
	//			//</AutoSizer></div>
	//		)}
	//	</AutoSizer>
	//</div>
	//)}
	)})