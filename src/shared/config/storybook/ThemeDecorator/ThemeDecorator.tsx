// eslint-disable-next-line dreamatty-path-checker-plugin/layer-imports
import { StoryFn } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator =
  (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
