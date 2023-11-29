import {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

import { useJsonSettings } from '@/entities/User';

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
  const { theme: savedTheme } = useJsonSettings();

  const [isInitedTheme, setIsInitedTheme] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.GREEN,
  );

  useEffect(() => {
    if (!isInitedTheme && savedTheme) {
      setTheme(savedTheme);
      setIsInitedTheme(true);
    }
  }, [isInitedTheme, savedTheme]);
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
