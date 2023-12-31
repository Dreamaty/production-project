import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router';

import { rtkApi } from '@/shared/api/rtkApi';

import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import {
  ArticleDetailsCommentsSchema,
  ArticleSortSchema,
  ArticleTypeTabsSchema,
} from '@/features/Article';
import { ArticleInfinityListSchema } from '@/features/Article';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileStateSchema } from '@/features/EditableProfileCard';
import { ScrollSaveSchema } from '@/features/ScrollSave';
import { ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailsPage';

export interface StateSchema {
  user: UserSchema;
  saveScroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async Reducers
  loginForm?: LoginSchema;
  profile?: ProfileStateSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articleInfiniteList?: ArticleInfinityListSchema;
  articleSort?: ArticleSortSchema;
  articleTabTypes?: ArticleTypeTabsSchema;
  articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<
  StateSchemaKey,
  boolean
>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: AnyAction,
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager
  extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
