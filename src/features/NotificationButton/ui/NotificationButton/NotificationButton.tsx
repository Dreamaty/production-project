
import { NotificationList } from 'entity/Notification'
import { memo, useCallback, useState } from 'react'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'

import { BrowserView, MobileView } from 'react-device-detect'
import { cx } from 'shared/lib/classNames/cx'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { BackgroundColor, Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

export const NotificationButton = memo(({ className }: {className?: string}) => {

	const [isOpen, setIsOpen] = useState(false)

	const onOpenDrawer = useCallback(() => setIsOpen(true)
		,[])
	const onCloseDrawer = useCallback(() => setIsOpen(false)
		,[])

	const trigger = ( 
		<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR} className={cx(cls.notificationButton, {},
			[className])}>
			<Icon Svg={NotificationIcon} backgroundColor={BackgroundColor.SECONDARY_COLOR} />
		</Button>
	)
		
	return (
		<div>
			<BrowserView>
				<Popover trigger={trigger}>
					<NotificationList className={cls.notifications} />
				</Popover>
			</BrowserView>
			<MobileView>
				{trigger}
				<AnimationProvider>
					<Drawer isOpen={isOpen} onClose={onCloseDrawer} >
						<NotificationList/>
					</Drawer>
				</AnimationProvider>
			</MobileView>
		</div>
	) 
})