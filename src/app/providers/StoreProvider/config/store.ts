import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { loginReducer } from 'features/AuthByUsername'
import { counterReducer } from '../../../../entity/Counter'
import { userReducer } from '../../../../entity/User'
import { StateSchema } from './StateSchema'

const rootReducers = combineReducers({
	counter: counterReducer,
	user: userReducer,
	loginForm: loginReducer,
})
export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rootReducers>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
