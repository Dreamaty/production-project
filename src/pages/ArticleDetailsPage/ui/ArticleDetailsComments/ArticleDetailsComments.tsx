import { CommentList } from 'entity/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import {
	addCommentForArticle,
	fetchCommentsByArticleId,
	getArticleComments,
	getArticleCommentsIsLoading
} from 'features/Article/ArticleDetailsComments'

import { t } from 'i18next'
import { memo, useCallback } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { TextSize, UiText } from 'shared/ui/Text'

export const ArticleDetailsComments = memo(({ className, articleId }: {className?: string, articleId: string}) => {


	const comments = useAppSelector(getArticleComments.selectAll)
	const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading)

	const dispatch = useAppDispatch()
	
	const onSendComment = useCallback((text: string ) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(articleId))
	})
		
	return (
		<VStack max gap='16' className={cx('', {},
			[className])}>
			<UiText 
				size={TextSize.L} 
				title={t('Comments')}
			/>
			<AddCommentForm onSendComment={onSendComment} />
			<CommentList comments={comments} isLoading={commentsIsLoading} />
		</VStack>
	)
})