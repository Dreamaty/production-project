import { memo } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { UiText } from 'shared/ui/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

export const CommentCard = memo(({ className, comment, isLoading }: {
	className?: string, 
	comment?: Comment, 
	isLoading?: boolean 
}) => {

	if(isLoading){
		return (
			<div className={cx(cls.commentCard, {},
				[className, cls.loading])}>
				<div className={cls.header}>
					<Skeleton border='100%' height={30} width={30}/>
					<Skeleton border='10px' height={20} width={100}/>
				</div>
				<Skeleton className={cls.text} border='10px' height={20} width={'100%'}/>
				<Skeleton className={cls.text} border='10px' height={20} width={'100%'}/>
			</div>
		)
	}

	if(!comment) return null
		
	return (
		<div className={cx(cls.commentCard, {},
			[className])}>
			<AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
				{comment?.user.avatar && (
					<Avatar 
						size={30} 
						alt={comment.user.username} 
						src={comment.user?.avatar} 
					/>)}
				<UiText title={comment?.user.username} /> 
			</AppLink>
			<UiText className={cls.text} text={comment?.text} />
		</div>
	)
})