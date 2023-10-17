import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entity/Article'

export const getArticlesView = (state : StateSchema) => 
	state.articlesPage?.view || ArticleView.BLOCKS

export const getArticlesError = (state : StateSchema) => state.articlesPage?.error

export const getArticlesIsLoading = (state : StateSchema) => state.articlesPage?.isLoading || false