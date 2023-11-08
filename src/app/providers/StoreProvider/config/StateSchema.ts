import { ArticleDetailsSchema } from '@/entities/Article'
import {
	AnyAction,
	CombinedState,
	Reducer,
	ReducersMapObject
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'

import { UserSchema } from '@/entities/User'
import { AddCommentFormSchema } from '@/features/AddCommentForm'
import { ArticleDetailsCommentsSchema, ArticleSortSchema, ArticleTypeTabsSchema } from '@/features/Article'

import { LoginSchema } from '@/features/AuthByUsername'
import { ProfileStateSchema } from '@/features/EditableProfileCard'
import { ScrollSaveSchema } from '@/features/ScrollSave'
import { ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailsPage'
import { ArticlesPageSliceSchema } from '@/pages/ArticlesPage'
import { rtkApi } from '@/shared/api/rtkApi'
import { NavigateOptions, To } from 'react-router'

export interface StateSchema {
	user: UserSchema
	saveScroll: ScrollSaveSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	// Async Reducers
	loginForm?: LoginSchema
	profile?: ProfileStateSchema
	articleDetails?: ArticleDetailsSchema
	articleDetailsComments?: ArticleDetailsCommentsSchema
	addCommentForm?: AddCommentFormSchema
	articlesPage?: ArticlesPageSliceSchema
	articleSort?: ArticleSortSchema
	articleTabTypes?: ArticleTypeTabsSchema
	articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
	navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
