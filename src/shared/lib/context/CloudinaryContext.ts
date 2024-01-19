import { Cloudinary } from '@cloudinary/url-gen';
import { createContext } from 'react';

export type CloudinaryContextProps = Cloudinary | undefined;

export const CloudinaryContext =
  createContext<CloudinaryContextProps>(undefined);
