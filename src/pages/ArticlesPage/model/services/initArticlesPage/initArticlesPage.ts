import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import {
	ArticleSortField,
	articleSortActions,
	articleTypeTabsActions
} from '@/features/Article'
import { SortOrder } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
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

				const typeFromUrl = searchParams.get('type') as ArticleType

				orderFromUrl && dispatch(articleSortActions.setOrder(orderFromUrl ))
				sortFromUrl && dispatch(articleSortActions.setSort(sortFromUrl))
				searchFromUrl && dispatch(articleSortActions.setSearch(searchFromUrl))
				typeFromUrl && dispatch(articleTypeTabsActions.setType(typeFromUrl))
				

				dispatch(articlesPageActions.initState())
				dispatch(fetchArticlesList({}))
			}
			
		
		},
	)
