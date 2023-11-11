import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks'
import { Skeleton } from '@/shared/ui/Skeleton'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
	className?: string, 
	articleId: string
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
	const { t } = useTranslation('article')
	const  authData = useAppSelector(getUserAuthData)

	const { data, isLoading } = useArticleRating({
		articleId, userId: authData?.id || ''
	})

	const [	rateArticleMutation] = useRateArticle()

	const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
		try {
			rateArticleMutation({ 
				articleId, 
				userId: 
				authData?.id || '', 
				rate: starsCount 
			})
		} catch (error) {
			console.log(error)
			
		}
	}, [articleId, authData?.id, rateArticleMutation])

	const onAccept = useCallback((starsCount: number, feedback?: string) => {
		handleRateArticle(starsCount,feedback)
	},[handleRateArticle])
	const onCancel = useCallback((starsCount: number) => {
		handleRateArticle(starsCount)
	},[handleRateArticle])



	if (isLoading ) {
		return <Skeleton width={'100%'} height={120} />
	}	


	return (
		<RatingCard 
			title={t('Feedback this article')}
			rate={data?.[0]?.rate}
			onAccept={onAccept}
			onCancel={onCancel}
			className={className}
			feedbackTitle={t('Feedback this article This can help upgrade quality')}
			hasFeedback
		/>

	)
})

export default ArticleRating