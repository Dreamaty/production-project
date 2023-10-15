import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Card } from 'shared/ui/Card/Card'
import { Icon } from 'shared/ui/Icon/Icon'
import { UiText } from 'shared/ui/Text'
import {
	Article, ArticleBlockType, ArticleTextBlock, ArticleView
} from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleListItem.module.scss'

export const ArticleListItem = memo(({ className, article, view }: {
	className?: string
	article?: Article
	view: ArticleView
}) => {
	const { t } = useTranslation('article')
	const navigate = useNavigate()

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.articleDetails + article?.id)
	}, [article?.id, navigate])


	const types = <UiText text={article?.type.join(', ')} className={cls.types} />
	const views = (
		<div className={cls.viewsWrapper}>
			<UiText text={article?.views} className={cls.views}/>
			<Icon Svg={EyeIcon} className={cls.viewsIcon}/>
		</div>
	)

	if(view === ArticleView.BLOCKS ){
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<div className={cx(cls.articleListItem, {},
				[className, cls[view]])}>
				<Card onClick={onOpenArticle}>
					<div className={cls.imageWrapper}>
						<img src={article?.img} className={cls.img} alt={article?.title} />
						<UiText text={article?.createdAt} className={cls.date} />
					</div>
					<div className={cls.infoWrapper} >
						{types}
						{views}
					</div>
					<UiText text={article?.title} className={cls.title} />
				</Card>
			</div>
	
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
						src={article?.user.avatar} 
						alt={article?.user.username || ''} 
					/>
					<UiText text={article?.user.username} className={cls.username} />
					<UiText text={article?.createdAt} className={cls.date} />
				</div>
				<UiText title={article?.title} className={cls.title} />
				{types}
				<img src={article?.img} className={cls.img} alt={article?.title}/>
				{textBlock && (
					<ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
				)}
				<div className={cls.footer}>
					<Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
						{t('Read More')}
					</Button>
					{view}
				</div>
			</Card>
		</div>
	)
	
})