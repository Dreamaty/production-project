import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entity/Article'

export const getArticlesView = (state : StateSchema) => 
	state.articlesPage?.view || ArticleView.BLOCKS

export const getArticlesError = (state : StateSchema) => state.articlesPage?.error

export const getArticlesIsLoading = (state : StateSchema) => state.articlesPage?.isLoading || false

export const getArticlesPage = (state : StateSchema) => state.articlesPage?.page || 1

export const getArticlesLimit = (state : StateSchema) => state.articlesPage?.limit || 9

export const getArticlesHasMore = (state : StateSchema) => state.articlesPage?.hasMore 

export const getArticlesInited = (state : StateSchema) => state.articlesPage?._inited 