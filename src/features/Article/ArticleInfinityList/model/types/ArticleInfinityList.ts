import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView } from '@/entities/Article';

export interface ArticleInfinityListSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  view: ArticleView;
  _inited: boolean;
}
