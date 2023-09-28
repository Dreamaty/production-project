import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { cx } from 'shared/lib/classNames/cx'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
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
			className={cx(cls.sidebar, { [ cls.collapsed ]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				className={cls.collapseBtn}
				onClick={onToggle}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square={true}
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.link}
				>
					<MainIcon className={cls.icon} />
					<span>{t('Main')}</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={cls.link}
				>
					<AboutIcon className={cls.icon} />
					<span>{t('About')}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</div>
	)
}
