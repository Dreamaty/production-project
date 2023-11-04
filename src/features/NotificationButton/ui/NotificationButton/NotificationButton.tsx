
import { NotificationList } from 'entity/Notification'
import { memo } from 'react'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { cx } from 'shared/lib/classNames/cx'
import { Button, ButtonTheme } from 'shared/ui/Button'

import { BackgroundColor, Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

export const NotificationButton = memo(({ className }: {className?: string}) => {
		
	return (
		<Popover trigger={<Button theme={ButtonTheme.CLEAR} className={cx(cls.notificationButton, {},
			[className])}>
			<Icon Svg={NotificationIcon} backgroundColor={BackgroundColor.SECONDARY_COLOR} />
		</Button>}>
			<NotificationList className={cls.notifications} />
		</Popover>
	) 
})