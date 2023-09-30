import { StoryFn } from '@storybook/react'
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider'
import { profileReducer } from 'entity/Profile'
import { loginReducer } from 'features/AuthByUsername'
import { Provider } from 'react-redux'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'


const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer
}

export const StoreDecorator =
	(
		initialState?: DeepPartial<StateSchema>,
		asyncReducers?: ReducersList
	) =>
		// eslint-disable-next-line react/display-name
		(StoryComponent: StoryFn) => (
			<Provider
				store={createReduxStore(
					initialState as StateSchema,
					{	...defaultAsyncReducers, ...asyncReducers }
				)}
			>
				<StoryComponent />
			</Provider>
		)
