import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { TextAlign, TextSize, UiText } from 'shared/ui/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

export const CommentList = memo(({ className, comments, isLoading }: {
	className?: string,
	comments?: Comment[]
	isLoading?: boolean
}) => {
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<div className={cx(cls.commentList, {},
				[className])}>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
			</div>
		)
	}
		
	return (
		<div className={cx(cls.commentList, {},
			[className])}>
			{comments?.length
				? comments.map(comment => (
					<CommentCard
					 key={comment.id} 
					 className={cls.comment} 
					 comment={comment} 
					 isLoading={isLoading}
					 /> 
				))
				: (
					<UiText 
						align={TextAlign.CENTER} 
						size={TextSize.L} 
						text={t('There is no comments')} 
					/>	
				)
			}
		</div>
	)
})