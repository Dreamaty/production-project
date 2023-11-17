// eslint-disable-next-line dreamatty-path-checker-plugin/layer-imports
import { RouteProps } from 'react-router';

import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
