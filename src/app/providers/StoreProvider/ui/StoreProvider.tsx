import { DeepPartial } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

export const StoreProvider = ({
	children,
	initialState,
}: {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
}) => {
	const store = createReduxStore(initialState as StateSchema)

	return <Provider store={store}>{children}</Provider>
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
