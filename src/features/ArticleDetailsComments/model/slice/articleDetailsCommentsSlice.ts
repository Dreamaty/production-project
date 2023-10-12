import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider'
import { Comment } from 'entity/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsComments'


const commentsAdapter = createEntityAdapter<Comment>({

	selectId: (comment) => comment.id,

})


const articleDetailsCommentsSlice = createSlice({
	name: 'articleCommentList',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		ids: [],
		entities: {},
		error: undefined
	}),
	reducers: {
		
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (
				state, 
				action: PayloadAction<Comment[]>
			) => {
				commentsAdapter.setAll(state ,action.payload)
				state.isLoading = false
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
		
	}
})

export const getArticleComments = commentsAdapter.getSelectors<RootState>((state) => (
	state.articleDetailsComments || commentsAdapter.getInitialState()))


export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
