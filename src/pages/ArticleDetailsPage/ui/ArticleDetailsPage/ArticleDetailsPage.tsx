import { ArticleDetails } from '@/entities/Article'
import {
	ArticleRating,
	ArticleRecommendationsList,
	articleDetailsCommentsReducer
} from '@/features/Article'
import { cx } from '@/shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { VStack } from '@/shared/ui/Stack'
import { Page } from '@/widgets/Page'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { articleDetailsRecommendationsReducer } from '../../model/slice/articleDetailsRecommendationsSlice'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

const reducers:ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendations: articleDetailsRecommendationsReducer
}

const ArticleDetailsPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()
	

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount >
			<Page className={cx(cls.articleDetailsPage, {},
				[className])}>
				<VStack gap='16' max>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={ id }/>
					<ArticleRating articleId={id} />
					<ArticleRecommendationsList />
					<ArticleDetailsComments articleId={id}  />
				</VStack>
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticleDetailsPage)