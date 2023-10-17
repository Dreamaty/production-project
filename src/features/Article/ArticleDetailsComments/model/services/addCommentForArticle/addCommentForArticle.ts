import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entity/Article'
import { Comment } from 'entity/Comment'
import { getUserAuthData } from 'entity/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'



export const addCommentForArticle = createAsyncThunk<
	Comment, 
	string, 
	ThunkConfig<string>
>(
	'ArticleDetails/addCommentForArticle',
	async (text, thunkApi) => {
		const { dispatch, extra, rejectWithValue, getState } = thunkApi

		const userId = getUserAuthData(getState())?.id
		const articleId = getArticleDetailsData(getState())?.id

		if(!userId || !text || !articleId) return rejectWithValue('no data')

		try {
			const response = await extra.api.post<Comment>('/comments', {
				articleId,
				userId,
				text,
			})
			

			if (!response.data) {
				throw new Error()
			}
			dispatch(fetchCommentsByArticleId(articleId))

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue('there was an error fetching comments')
		}
	},
)
