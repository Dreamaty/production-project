import { Theme } from '@/shared/const/theme'
import { memo } from 'react'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import GreenIcon from '@/shared/assets/icons/theme-green.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { cx } from '@/shared/lib/classNames/cx'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button'

export const ThemeSwitcher = memo(({ className }: { className?: string }) => {
	const { theme, toggleTheme } = useTheme()
	LightIcon
	DarkIcon
	GreenIcon

	const chooseTheme = (theme: Theme) => {
		switch (theme) {
		case Theme.LIGHT: return <LightIcon/>
		case Theme.DARK: return <DarkIcon/>
		case Theme.GREEN: return <GreenIcon/>
		}
	}
	return (
		<Button
			className={cx('', {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
		>
			{chooseTheme(theme)}
		</Button>
	)
})
