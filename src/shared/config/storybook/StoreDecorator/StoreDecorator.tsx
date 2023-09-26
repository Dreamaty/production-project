import { DeepPartial } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider'
import { Provider } from 'react-redux'

export const StoreDecorator =
	// eslint-disable-next-line react/display-name
	(initialState?: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
		<Provider store={createReduxStore(initialState as StateSchema)}>
			<StoryComponent />
		</Provider>
	)
