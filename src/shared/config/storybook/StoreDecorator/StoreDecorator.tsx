
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername'
import { Provider } from 'react-redux'


const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer
}

export const StoreDecorator =
	(
		initialState?: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
	) =>
		// eslint-disable-next-line react/display-name
		(StoryComponent: StoryFn) => (
			<Provider
				store={createReduxStore(
				initialState as StateSchema,
				{...defaultAsyncReducers, ...asyncReducers} as ReducersMapObject<StateSchema>,
				)}
			>
				<StoryComponent />
			</Provider>
		)
