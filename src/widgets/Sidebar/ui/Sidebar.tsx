import { useState } from "react"
import { cx } from "shared/lib/classNames/cx"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import cls from "./Sidebar.module.scss"

export const Sidebar = ({ className }: { className?: string }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div
			className={cx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
