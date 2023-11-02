import { ArticleList, ArticleView } from 'entity/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { VStack } from 'shared/ui/Stack'
import { TextSize, UiText } from 'shared/ui/Text'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'


interface ArticleRecommendationsListProps {
    className?: string;
}


export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	const { className } = props
	const { t } = useTranslation()

	const { isLoading, error, data } = useArticleRecommendationsList(3)

	if(isLoading || error) return null
    
	return (
		<VStack gap='8' className={cx('', {}, [className])}>
			<UiText 
				size={TextSize.L} 
				title={t('Recomend')}
			/>
			<ArticleList 
				articles={data} 
				isLoading={isLoading} 
				view={ArticleView.BLOCKS}
				target='_blank'
			/>
		</VStack>
	)
})