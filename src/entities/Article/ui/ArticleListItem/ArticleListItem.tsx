import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { cx } from '@/shared/lib/classNames/cx'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { VStack } from '@/shared/ui/Stack'
import { UiText } from '@/shared/ui/Text'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleBlockType, ArticleView } from '../../model/consts/consts'
import {
	Article, ArticleTextBlock
} from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleListItem.module.scss'

export const ArticleListItem = memo(({ className, article, view, target }: {
	className?: string
	article: Article
	view: ArticleView
	target?: HTMLAttributeAnchorTarget
}) => {
	const { t } = useTranslation('article')

	const types = <UiText text={article?.type.join(', ')} className={cls.types} />
	const views = (
		<div className={cls.viewsWrapper}>
			<UiText text={article?.views} className={cls.views}/>
			<Icon Svg={EyeIcon} className={cls.viewsIcon}/>
		</div>
	)

	if(view === ArticleView.BLOCKS ){
		return (
			<AppLink 
				target={target}
				to={getRouteArticleDetails(article.id)} className={cx(cls.articleListItem, {},
					[className, cls[view]])}>
				<Card>
					<VStack gap='8'>
						<div className={cls.imageWrapper}>
							<img src={article?.img} className={cls.img} alt={article?.title} />
							<UiText text={article?.createdAt} className={cls.date} />
						</div>
						<div className={cls.infoWrapper} >
							{types}
							{views}
						</div>
						<UiText text={article?.title} className={cls.title} />
					</VStack>
					
				</Card>
			
			</AppLink>
	
		)}

	const textBlock = article?.blocks.find(
		block => block.type === ArticleBlockType.TEXT
	) as ArticleTextBlock
	
	return (
		<div className={cx(cls.articleListItem, {},
			[className, cls[view]])}>
			<Card >
				<div className={cls.header}>
					<Avatar 
						size={30} 
						src={article?.user?.avatar} 
						alt={article?.user?.username || ''} 
					/>
					<UiText text={article.user?.username} className={cls.username} />
					<UiText text={article.createdAt} className={cls.date} />
				</div>
				<UiText title={article.title} className={cls.title} />
				{types}
				<img src={article.img} className={cls.img} alt={article.title}/>
				{textBlock && (
					<ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
				)}
				<div className={cls.footer}>
					<AppLink to={getRouteArticleDetails(article.id)} target={target}>
						<Button theme={ButtonTheme.OUTLINE}>
							{t('Read More')}
						</Button>
					</AppLink>
					{view}
				</div>
			</Card>
		</div>
	)
	
})