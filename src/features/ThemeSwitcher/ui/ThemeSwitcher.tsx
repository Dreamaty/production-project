import { memo, useCallback } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import GreenIcon from '@/shared/assets/icons/theme-green.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { cx } from '@/shared/lib/classNames/cx';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import { saveJsonSettings } from '@/entities/User';

const ThemeSwitcher = memo(
  ({ className }: { className?: string }) => {
    const { theme, toggleTheme } = useTheme();
    LightIcon;
    DarkIcon;
    GreenIcon;

    const chooseTheme = (theme: Theme) => {
      switch (theme) {
        case Theme.LIGHT:
          return <LightIcon />;
        case Theme.DARK:
          return <DarkIcon />;
        case Theme.GREEN:
          return <GreenIcon />;
      }
    };
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
      toggleTheme(newTheme => {
        dispatch(
          saveJsonSettings({
            theme: newTheme,
          }),
        );
      });
    }, [dispatch, toggleTheme]);
    return (
      <Button
        className={cx('', {}, [className])}
        onClick={onToggleHandler}
        theme={ButtonTheme.CLEAR}
      >
        {chooseTheme(theme)}
      </Button>
    );
  },
);
