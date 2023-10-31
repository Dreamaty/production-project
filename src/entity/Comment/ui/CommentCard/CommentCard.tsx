import { memo } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from 'shared/ui/Stack'
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
			<VStack gap='8' max className={cx(cls.commentCard, {},
				[className, cls.loading])}>
				<HStack gap='8' max>
					<Skeleton border='100%' height={30} width={30}/>
					<Skeleton border='10px' height={20} width={100}/>
				</HStack>
				<Skeleton className={cls.text} border='10px' height={20} width={'100%'}/>
				<Skeleton className={cls.text} border='10px' height={20} width={'100%'}/>
			</VStack>
		)
	}

	if(!comment) return null
		
	return (
		<VStack gap='8' max className={cx(cls.commentCard, {},
			[className])}>
			<AppLink to={`${RoutePath.profile}${comment?.user.id}`}>
				<HStack gap='8' max>
					{comment?.user.avatar && (
						<Avatar 
							size={30} 
							alt={comment.user.username} 
							src={comment.user?.avatar} 
						/>)}
					<UiText title={comment?.user.username} /> 
				</HStack>
			</AppLink>
			<UiText className={cls.text} text={comment?.text} />
		</VStack>
	)
})