import { Cloudinary } from '@cloudinary/url-gen';
import { useContext } from 'react';

import { CloudinaryContext } from '../../context/CloudinaryContext';

type UseCloudinaryResult = Cloudinary | undefined;

export function useCloudinary(): UseCloudinaryResult {
  const cloud = useContext(CloudinaryContext);

  return cloud;
}
