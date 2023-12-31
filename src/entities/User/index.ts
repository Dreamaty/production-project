export { initAuthData } from './model/services/initAuthData';

export { saveJsonSettings } from './model/services/saveJsonService';

export { useJsonSettings } from './model/selectors/jsonSettings';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  userActions,
  userReducer,
} from './model/slice/userSlice';
export type { User, UserSchema } from './model/types/user';

export { UserRole } from './model/consts/consts';
