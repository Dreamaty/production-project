import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entity/Profile/model/slice/profileSlice'

import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'features/Article/ArticleDetailsComments'
import { loginReducer } from 'features/AuthByUsername'
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { Provider } from 'react-redux'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'


const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	articlesPage: articlesPageReducer
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
					{	
						...defaultAsyncReducers as ReducersMapObject, 
						...asyncReducers as ReducersMapObject<StateSchema>
					}
				)}
			>
				<StoryComponent />
			</Provider>
		)
