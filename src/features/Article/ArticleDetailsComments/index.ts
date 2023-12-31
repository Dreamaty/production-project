export { addCommentForArticle } from './model/services/addCommentForArticle/addCommentForArticle';

// eslint-disable-next-line max-len
export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from './model/selectors/comments';

export {
  articleDetailsCommentsActions,
  articleDetailsCommentsReducer,
  getArticleComments,
} from './model/slice/articleDetailsCommentsSlice';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsComments';
