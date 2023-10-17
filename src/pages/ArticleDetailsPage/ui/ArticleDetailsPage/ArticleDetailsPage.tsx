import { ArticleDetails } from 'entity/Article'
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
import { useNavigate, useParams } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { UiText } from 'shared/ui/Text'
import cls from './ArticleDetailsPage.module.scss'

const reducers:ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	const comments = useAppSelector(getArticleComments.selectAll)

	const dispatch = useAppDispatch()

	const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading)
	const commentsError = useAppSelector(getArticleCommentsError)
	
	const navigate = useNavigate()


	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles)
	}, [navigate])

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
	})


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount >
			<div className={cx(cls.articleDetailsPage, {},
				[className])}>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
					{t('Back to list')}
				</Button>
				<ArticleDetails id={ id }/>
				<UiText title={t('Comments')}/>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList comments={comments} isLoading={commentsIsLoading} />
			</div>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticleDetailsPage)