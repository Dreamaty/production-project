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
		error: undefined,
		page: 1,
		limit: 9,
		hasMore: true,
		_inited: false
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		initState: state => {
			const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
			state.view = view
			state.limit = view === ArticleView.LIST ? 4 : 9
			state._inited = true
		}
	},
	extraReducers: (builder) =>  {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.error = undefined
				state.isLoading = true
				if(action.meta.arg.replace) {
					articlesAdapter.removeAll(state)
				}
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false
				state.hasMore = action.payload.length >= state.limit

				if(action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload)
				} else {
					articlesAdapter.addMany(state, action.payload)
				}
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})

	},
})



export const { actions: articlesPageActions } = articlesPageSlice

export const { reducer: articlesPageReducer } = articlesPageSlice
