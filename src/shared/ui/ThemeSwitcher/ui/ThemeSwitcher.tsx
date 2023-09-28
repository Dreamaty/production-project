import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { memo } from 'react'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

export const ThemeSwitcher = memo(({ className }: { className?: string }) => {
	const { theme, toggleTheme } = useTheme()
	LightIcon
	DarkIcon

	return (
		<Button
			className={cx('', {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
})
