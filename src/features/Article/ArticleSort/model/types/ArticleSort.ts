import { SortOrder } from '@/shared/types/sort';

import { ArticleSortField } from '../consts/consts';

export interface ArticleSortSchema {
  sort: ArticleSortField;
  search: string;
  order: SortOrder;
}
