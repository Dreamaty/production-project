import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleType } from 'entity/Article'

export const getArticleTypeTabsSelectedType = 
(state: StateSchema) => state.articleTabTypes?.selectedType ?? ArticleType.ALL