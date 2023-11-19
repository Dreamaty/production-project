import {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Theme } from '@/shared/const/theme';

import { useJsonSettings } from '@/entities/User';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: savedTheme } = useJsonSettings();

  const [isInitedTheme, setIsInitedTheme] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || savedTheme || Theme.GREEN,
  );

  useEffect(() => {
    if (!isInitedTheme && savedTheme) {
      setTheme(savedTheme);
      setIsInitedTheme(true);
    }
  }, [isInitedTheme, savedTheme]);

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
