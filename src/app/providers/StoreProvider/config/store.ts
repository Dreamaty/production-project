import {
	CombinedState,
	Reducer,
	ReducersMapObject,
	configureStore
} from '@reduxjs/toolkit'

import { $api } from 'shared/api/api'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { userReducer } from '../../../../entity/User'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersList,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer
	}

	const extraArg: ThunkExtraArg = {
		api: $api,
	}

	const reducerManager = createReducerManager(rootReducers)

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		})
	})
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

type getState = ReturnType<typeof createReduxStore>['getState']
export type RootState = ReturnType<getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
// Infer the `RootState` and `AppDispatch` types from the store itself

