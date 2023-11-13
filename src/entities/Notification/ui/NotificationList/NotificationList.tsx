import { cx } from '@/shared/lib/classNames/cx'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

export const NotificationList = memo(({ className }: {className?: string}) => {
	const { t } = useTranslation()
	
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	})

	if(isLoading) {
		return (
			<VStack
				gap='16'
				max
				className={cx('', {},
					[className])}
			>
				<Skeleton width={'100%'} border='8px' height={80}/>
				<Skeleton width={'100%'} border='8px' height={80}/>
				<Skeleton width={'100%'} border='8px' height={80}/>
			</VStack>
		)
	}
		
	return (
		<VStack
			gap='16'
			max
			className={cx('', {},
				[className])}
		>
			{data?.map(item => (
				<NotificationItem key={item.id} notification={item} />
			))}
		</VStack>
	)
})