import { FeatureFlags } from '@/shared/types/featureFlags';

import { UserRole } from '../consts/consts';
import { JsonSettings } from './jsotSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
