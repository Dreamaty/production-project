import { Cloudinary } from '@cloudinary/url-gen';
import { FC, ReactNode } from 'react';

import { Theme } from '@/shared/const/theme';
import { CloudinaryContext } from '@/shared/lib/context/CloudinaryContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const cloud = new Cloudinary({
    cloud: {
      cloudName: 'dloofmq9t',
    },
  });

  return (
    <CloudinaryContext.Provider value={cloud}>
      {children}
    </CloudinaryContext.Provider>
  );
};

export default ThemeProvider;
