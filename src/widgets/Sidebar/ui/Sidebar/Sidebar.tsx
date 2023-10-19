import {
	memo, useEffect, useMemo, useState
} from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

export const Sidebar = memo(({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const sidebarItemsList = useAppSelector(getSidebarItems)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}
	useEffect(() => {
		console.log('sidebar creating')
		
		return () => {
			console.log('sidebar deleting')
		}
	}, [])
	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem key={item.path} item={item} collapsed={collapsed}/>)
	), [collapsed, sidebarItemsList])
	return (
		<menu
			data-testid="sidebar"
			className={cx(cls.sidebar, { [ cls.collapsed ]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				className={cls.collapseBtn}
				onClick={onToggle}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				{itemsList}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</menu>
	)
})
