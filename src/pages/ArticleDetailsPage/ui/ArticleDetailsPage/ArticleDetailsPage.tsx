import { ArticleDetails, ArticleList, ArticleView } from 'entity/Article'
import { CommentList } from 'entity/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import {
	articleDetailsCommentsReducer,
	getArticleComments,
	getArticleCommentsError,
	getArticleCommentsIsLoading
} from 'features/Article/ArticleDetailsComments'
import { addCommentForArticle } from 'features/Article/ArticleDetailsComments/model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from 'features/Article/ArticleDetailsComments/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { TextSize, UiText } from 'shared/ui/Text'
import { Page } from 'widgets/Page/Page'
import { getArticleDetailsRecommendationsError, getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recomendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsRecommendationsReducer, getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

const reducers:ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendations: articleDetailsRecommendationsReducer
}

const ArticleDetailsPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	const comments = useAppSelector(getArticleComments.selectAll)
	const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading)
	const commentsError = useAppSelector(getArticleCommentsError)

	const recommendations = useAppSelector(getArticleRecommendations.selectAll)
	const recommendationsIsLoading = useAppSelector(getArticleDetailsRecommendationsIsLoading)
	const recommendationsError = useAppSelector(getArticleDetailsRecommendationsError)

	const dispatch = useAppDispatch()
	
	const onSendComment = useCallback((text: string ) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])
	
	if(!id ) {
		return (
			<div className={cx(cls.articleDetailsPage, {},
				[className])}>
				{t('Article is not found')}
			</div>
		)
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
		dispatch(fetchArticleRecommendations())
	})


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount >
			<Page className={cx(cls.articleDetailsPage, {},
				[className])}>
				<VStack gap='16' max>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={ id }/>
					<UiText 
						size={TextSize.L} 
						title={t('Recomend')}
					/>
					<ArticleList 
						articles={recommendations} 
						isLoading={recommendationsIsLoading} 
						view={ArticleView.BLOCKS}
						className={cls.recommendations}
						target='_blank'
					/>
					<UiText 
						size={TextSize.L} 
						title={t('Comments')}
						className={cls.commentTitle}
					/>
					<AddCommentForm onSendComment={onSendComment} />
					<CommentList comments={comments} isLoading={commentsIsLoading} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticleDetailsPage)