import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entity/Article'
import { getArticlesLimit } from '../../selectors/articles'

interface FetchArticlesListProperties {
	page?: number 
}

export const fetchArticlesList = createAsyncThunk<
		Article[], 
		FetchArticlesListProperties, 
		ThunkConfig<string>
	>(
		'article/fetchArticleById',
		async (props, thunkApi) => {
			const { extra, rejectWithValue, getState } = thunkApi
			const { page = 1 } = props
			const limit = getArticlesLimit(getState())
			
			try {
				const response = await extra.api.get<Article[]>('/articles', {
					params: {
						_expand: 'user',
						_limit: limit,
						_page: page
					}
				})
			
				if(!response.data) {
					throw new Error()
				}
			
				return response.data
			} catch (error) {
				console.log(error)
				return rejectWithValue('error')
			}
		},
	)
