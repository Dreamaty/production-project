import { Theme, useTheme } from "app/providers/ThemeProvider"

import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import { cx } from "shared/lib/classNames/cx"
import { Button } from "shared/ui/Button"
import { ButtonTheme } from "shared/ui/Button/ui/Button"
import cls from "./ThemeSwitcher.module.scss"

export const ThemeSwitcher = ({ className }: { className?: string }) => {
	const { theme, toggleTheme } = useTheme()
	LightIcon
	DarkIcon

	return (
		<Button
			className={cx(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
}
