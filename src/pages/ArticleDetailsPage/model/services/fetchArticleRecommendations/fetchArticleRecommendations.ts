import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '@/entity/Article'



export const fetchArticleRecommendations = createAsyncThunk<
		Article[], 
		undefined, 
		ThunkConfig<string>
	>(
		'articleDetails/fetchArticleRecommendations',
		async (_, thunkApi) => {
			const { extra, rejectWithValue } = thunkApi

			try {
		
				const response = await extra.api.get<Article[]>('/articles', {
					params: {
						_limit: 4,
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
