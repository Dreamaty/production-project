export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage/ArticlesPage.async'

export { getArticlesView } from './model/selectors/articles'
export type { ArticlesPageSliceSchema } from './model/types/ArticlesPageSlice'

export { fetchArticlesList } from './model/services/fetchArticlesList/fetchArticlesList'
export { articlesPageActions } from './model/slice/articlesPageSlice'

