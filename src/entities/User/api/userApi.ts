import { rtkApi } from '@/shared/api/rtkApi';

import { JsonSettings } from '../model/types/jsotSettings';
import { User } from '../model/types/user';

interface SetJsonSettingsArgs {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/user/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    getUserDataById: build.query<User, string>({
      query: userId => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});
export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery =
  userApi.endpoints.getUserDataById.initiate;
