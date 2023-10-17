import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entity/Article'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSliceSchema } from '../types/ArticlesPageSlice'

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state ) => state.articlesPage || articlesAdapter.getInitialState()
)



export const articlesPageSlice = createSlice({
	name: 'articlesPageSlice',
	initialState: articlesAdapter.getInitialState<ArticlesPageSliceSchema>({
		view: ArticleView.BLOCKS,
		ids: [],
		entities: {},
		isLoading: false,
		error: undefined
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
		},
		initState: state => {
			state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
		}
	},
	extraReducers: (builder) =>  {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
				articlesAdapter.setAll(state, action.payload)
				state.isLoading = false
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})

	},
})



export const { actions: articlesPageActions } = articlesPageSlice

export const { reducer: articlesPageReducer } = articlesPageSlice
