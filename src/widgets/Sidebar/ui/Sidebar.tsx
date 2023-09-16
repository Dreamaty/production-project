import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

export const Sidebar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div
			className={cx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button onClick={onToggle}>{t('Toggle')}</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
