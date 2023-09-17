import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

export const Sidebar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onToggle = async () => {
		setCollapsed((prev) => !prev)
	}
	return (
		<div
			data-testid="sidebar"
			className={cx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button data-testid="sidebar-toggle" onClick={onToggle}>
				{t('Toggle')}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
