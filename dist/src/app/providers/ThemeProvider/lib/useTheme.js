import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), setTheme = _a.setTheme, theme = _a.theme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme, toggleTheme: toggleTheme };
}
