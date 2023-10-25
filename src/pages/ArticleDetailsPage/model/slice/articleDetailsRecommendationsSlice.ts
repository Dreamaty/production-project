import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entity/Article'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendations'


const recommendationsAdapter = createEntityAdapter<Article>({ selectId: (article) => article.id })

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState()
)

export const articleDetailsRecommendationsSlice = createSlice({
	name: 'articleDetailsRecommendations',
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
		isLoading: false,
		ids: [],
		entities: {}
	}) ,
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchArticleRecommendations.fulfilled, 
				(
					state, action: PayloadAction<Article[]>
				) => {
					state.isLoading = false
					recommendationsAdapter.setAll(state, action.payload)
				})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice
