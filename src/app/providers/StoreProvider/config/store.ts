import {
	CombinedState,
	Reducer,
	ReducersMapObject,
	configureStore
} from '@reduxjs/toolkit'

import { scrollSaveReducer } from '@/features/ScrollSave'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { userReducer } from '../../../../entities/User'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		[rtkApi.reducerPath]: rtkApi.reducer, 
		...asyncReducers,
		user: userReducer,
		saveScroll: scrollSaveReducer
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
		}).concat(rtkApi.middleware)
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

