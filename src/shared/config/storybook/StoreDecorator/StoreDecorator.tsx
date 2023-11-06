import { StateSchema, createReduxStore } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsCommentsReducer } from '@/features/Article/ArticleDetailsComments'
import { loginReducer } from '@/features/AuthByUsername'
import { profileStateReducer } from '@/features/EditableProfileCard/model/slice/profileStateSlice'
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { Provider } from 'react-redux'


const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileStateReducer,
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
