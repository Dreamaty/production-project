import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entity/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[], 
	string | undefined, 
	ThunkConfig<string>
>(
	'articleDetailsComments/fetchCommentsByArticleId',
	async (articleId, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi

		if(!articleId) return rejectWithValue('No articleId')

		try {
			const response = await extra.api.get<Comment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user'
				}
			})
			

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue('there was an error fetching comments')
		}
	},
)
