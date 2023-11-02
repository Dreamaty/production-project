import {
	AnyAction,
	CombinedState,
	Reducer,
	ReducersMapObject
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entity/Article'

import { UserSchema } from 'entity/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticleDetailsCommentsSchema } from 'features/Article/ArticleDetailsComments'
import { ArticleSortSchema } from 'features/Article/ArticleSort'
import { ArticleTypeTabsSchema } from 'features/Article/ArticleTypeTabs/model/types/ArticleTypeTabs'
import { LoginSchema } from 'features/AuthByUsername'
import { ProfileStateSchema } from 'features/EditableProfileCard'
import { ScrollSaveSchema } from 'features/ScrollSave'
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendations'
import { ArticlesPageSliceSchema } from 'pages/ArticlesPage'
import { NavigateOptions, To } from 'react-router'
import { rtkApi } from 'shared/api/rtkApi'

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
