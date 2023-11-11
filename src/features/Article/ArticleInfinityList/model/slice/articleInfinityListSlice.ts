import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Article, ArticleView } from '@/entities/Article'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticleInfinityListSchema } from '../types/ArticleInfinityList'

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state ) => state.articleInfiniteList || articlesAdapter.getInitialState()
)


export const articleInfinityListSlice = createSlice({
	name: 'articleInfinityList',
	initialState: articlesAdapter.getInitialState<ArticleInfinityListSchema>({
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


export const { actions: articleInfinityListActions } = articleInfinityListSlice

export const { reducer: articleInfinityListReducer } = articleInfinityListSlice
