import {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}
const fallbackTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [isInitedTheme, setIsInitedTheme] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.DARK,
  );

  useEffect(() => {
    if (!isInitedTheme && initialTheme) {
      setTheme(initialTheme);
      setIsInitedTheme(true);
    }
  }, [isInitedTheme, initialTheme]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  document.body.className = theme;

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
