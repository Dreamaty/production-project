import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { cx } from '@/shared/lib/classNames/cx'
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { getCanEditArticle } from '../../model/selectors/article'

export const ArticleDetailsPageHeader = memo(({ className }: {className?: string}) => {
	const { t } = useTranslation('article')

	const article = useAppSelector(getArticleDetailsData)

	const navigate = useNavigate()
	const canEdit = useAppSelector(getCanEditArticle)

	const onBackToList = useCallback(() => {
		navigate(getRouteArticles())
	}, [navigate])

	const onEditArticle = useCallback(() => {
		navigate(getRouteArticleEdit(article?.id || ''))
	}, [article?.id, navigate])
		
	return (
		<HStack justify='between' max className={cx('', {}, [className])} >
			<Button 
				theme={ButtonTheme.OUTLINE} 
				onClick={onBackToList}
			>
				{t('Back to list')}
			</Button>

			{canEdit && <Button 
				theme={ButtonTheme.OUTLINE} 
				onClick={onEditArticle}
			>
				{t('Edit')}
			</Button>}
		</HStack>
	)
})