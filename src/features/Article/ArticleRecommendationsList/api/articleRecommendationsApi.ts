import { Article } from 'entity/Article'
import { rtkApi } from 'shared/api/rtkApi'


const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsList: build.query<Article[], number>({
			query: (limit) => ({
				url: '/articles',
				params: {
					_limit: limit
				}
			})
		})
	})
})
export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery
