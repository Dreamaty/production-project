import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entity/Article'
export const fetchArticlesList = createAsyncThunk<
		Article[], 
		undefined, 
		ThunkConfig<string>
	>(
		'article/fetchArticleById',
		async (_, thunkApi) => {
			const { extra, rejectWithValue } = thunkApi
		
			try {
				const response = await extra.api.get<Article[]>('/articles', {
					params: {
						_expand: 'user',
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
