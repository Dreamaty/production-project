import { StoryFn } from '@storybook/react'
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entity/Profile'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'features/ArticleDetailsComments'
import { loginReducer } from 'features/AuthByUsername'
import { Provider } from 'react-redux'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'


const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer
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
