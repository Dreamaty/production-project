
import { SortOrder } from 'shared/types'

export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'createdAt',
}

export interface ArticleSortSchema {
	sort: ArticleSortField
	search: string
	order: SortOrder;
}