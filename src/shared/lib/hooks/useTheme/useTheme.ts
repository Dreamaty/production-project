import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { useContext } from 'react'
import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const { setTheme, theme } = useContext(ThemeContext)

	const toggleTheme = () => {
		let newTheme: Theme

		switch (theme) {
		case Theme.LIGHT: 
			newTheme = Theme.DARK
			break
		case Theme.DARK:
			newTheme = Theme.GREEN
			break

		default: newTheme = Theme.LIGHT
		}
		setTheme?.(newTheme)
		document.body.className = newTheme
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme: theme || Theme.LIGHT, toggleTheme }
}
