import { memo, useCallback } from 'react';

import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import {
  BackgroundColor,
  Icon as IconDeprecated,
} from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { saveJsonSettings } from '@/entities/User';

export const ThemeSwitcher = memo(
  ({ className }: { className?: string }) => {
    const { theme, toggleTheme } = useTheme();

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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Icon
            clickable
            onClick={onToggleHandler}
            width={40}
            height={40}
            Svg={ThemeIcon}
            className={cx('', {}, [className])}
          />
        }
        off={
          <ButtonDeprecated
            className={cx('', {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
          >
            <IconDeprecated
              width={40}
              height={40}
              backgroundColor={BackgroundColor.SECONDARY_COLOR}
              Svg={ThemeIconDeprecated}
            />
          </ButtonDeprecated>
        }
      />
    );
  },
);
