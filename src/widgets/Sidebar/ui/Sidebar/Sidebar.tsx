import { memo, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

export const Sidebar = memo(({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}
	const itemsList = useMemo(() => SidebarItemsList.map((item) => (
		<SidebarItem key={item.path} item={item} collapsed={collapsed}/>)
	), [collapsed])
	return (
		<div
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
		</div>
	)
})
