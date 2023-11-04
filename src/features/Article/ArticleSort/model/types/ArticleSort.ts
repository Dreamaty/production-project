
import { SortOrder } from '@/shared/types'
import { ArticleSortField } from '../consts/consts'

export interface ArticleSortSchema {
	sort: ArticleSortField
	search: string
	order: SortOrder;
}