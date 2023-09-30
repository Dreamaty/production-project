import {
	AnyAction, CombinedState,
	Reducer, ReducersMapObject
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'entity/Counter'
import { ProfileSchema } from 'entity/Profile'
import { UserSchema } from 'entity/User'
import { LoginSchema } from 'features/AuthByUsername'
import { NavigateOptions, To } from 'react-router'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	// Async Reducers
	loginForm?: LoginSchema
	profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

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
}
