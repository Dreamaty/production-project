import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { ArticleSortField } from 'features/Article/ArticleSort'
import { articleSortActions } from 'features/Article/ArticleSort/model/slice/articleSortSlice'
import { SortOrder } from 'shared/types'
import { getArticlesInited } from '../../selectors/articles'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'


export const initArticlesPage = createAsyncThunk<
		void, 
		URLSearchParams, 
		ThunkConfig<string>
	>(
		'articlesPage/initArticlesPage',
		async (searchParams, thunkApi) => {
			const { extra, rejectWithValue, getState, dispatch } = thunkApi
			const inited = getArticlesInited(getState())

			if(!inited){

				const orderFromUrl = searchParams.get('order') as SortOrder
				const sortFromUrl = searchParams.get('sort') as ArticleSortField
				const searchFromUrl = searchParams.get('search')

				orderFromUrl && dispatch(articleSortActions.setOrder(orderFromUrl ))
				sortFromUrl && dispatch(articleSortActions.setSort(sortFromUrl))
				searchFromUrl && dispatch(articleSortActions.setSearch(searchFromUrl))
				

				dispatch(articlesPageActions.initState())
				dispatch(fetchArticlesList({}))
			}
			
		
		},
	)
