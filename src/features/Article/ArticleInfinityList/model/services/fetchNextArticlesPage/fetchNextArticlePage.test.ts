import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'


describe('fetchNextArticlesPage',  () => {
	test('Success to fetch next page', async () => {
		
	
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articleInfiniteList: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true
			}
		})

		await thunk.callThunk()

		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(fetchArticlesList).toBeCalledWith({ page: 3 })
		

	})

	test('should fetchArticleList not to be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articleInfiniteList: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false
			}
		})

		await thunk.callThunk()


		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(fetchArticlesList).not.toBeCalled()


	})
})