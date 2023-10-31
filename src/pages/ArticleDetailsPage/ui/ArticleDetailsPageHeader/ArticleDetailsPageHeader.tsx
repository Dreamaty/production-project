import { getArticleDetailsData } from 'entity/Article'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { getCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

export const ArticleDetailsPageHeader = memo(({ className }: {className?: string}) => {
	const { t } = useTranslation('article')

	const article = useAppSelector(getArticleDetailsData)

	const navigate = useNavigate()
	const canEdit = useAppSelector(getCanEditArticle)

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles)
	}, [navigate])

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`)
	}, [article?.id, navigate])
		
	return (
		<div className={cx(cls.articleDetailsPageHeader, {},
			[className])}>
			<Button 
				theme={ButtonTheme.OUTLINE} 
				onClick={onBackToList}
			>
				{t('Back to list')}
			</Button>
			{canEdit && <Button 
				className={cls.editBtn}
				theme={ButtonTheme.OUTLINE} 
				onClick={onEditArticle}
			>
				{t('Edit')}
			</Button>}
		</div>
	)
})