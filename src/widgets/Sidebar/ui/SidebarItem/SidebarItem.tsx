import { getUserAuthData } from 'entity/User'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import cls from './SidebarItem.module.scss'

export const SidebarItem = ({ item, collapsed }: {
	item: SidebarItemType, collapsed: boolean
}) => {
	const { t } = useTranslation()

	const isAuth = useAppSelector(getUserAuthData)

	if(!isAuth && item.authOnly) return null
  
	return (
		<AppLink
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
			className={cx(cls.link, { [ cls.collapsed ]: collapsed }) }
		>
			<item.Icon className={cls.icon} />
			<span>{t(item.text)}</span>
		</AppLink>
	)
}