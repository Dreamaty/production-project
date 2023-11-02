import { ArticleDetails } from 'entity/Article'
import {
	articleDetailsCommentsReducer
} from 'features/Article/ArticleDetailsComments'
import { ArticleRecommendationsList } from 'features/Article/ArticleRecommendationsList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { VStack } from 'shared/ui/Stack'
import { Page } from 'widgets/Page/Page'
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
	
	if(!id ) {
		return (
			<div className={cx(cls.articleDetailsPage, {},
				[className])}>
				{t('Article is not found')}
			</div>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount >
			<Page className={cx(cls.articleDetailsPage, {},
				[className])}>
				<VStack gap='16' max>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={ id }/>
					<ArticleRecommendationsList />
					<ArticleDetailsComments articleId={id}  />
				</VStack>
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticleDetailsPage)