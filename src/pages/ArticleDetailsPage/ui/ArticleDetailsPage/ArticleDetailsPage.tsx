import { ArticleDetails } from 'entity/Article'
import { CommentList } from 'entity/Comment'
import {
	articleDetailsCommentsReducer,
	getArticleComments,
	getArticleCommentsError,
	getArticleCommentsIsLoading
} from 'features/ArticleDetailsComments'
import { fetchCommentsByArticleId } from 'features/ArticleDetailsComments/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { cx } from 'shared/lib/classNames/cx'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitalEffect'
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

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

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
			<div className={cx(cls.articleDetailsPage, {},
				[className])}>
				<ArticleDetails id={ id }/>
				<UiText title={t('Comments')}/>
				<CommentList comments={comments} isLoading={commentsIsLoading} />
			</div>
		</DynamicModuleLoader>
		
	)
}

export default memo(ArticleDetailsPage)