import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';

export const getArticleTypeTabsSelectedType = (
  state: StateSchema,
) => state.articleTabTypes?.selectedType ?? ArticleType.ALL;
