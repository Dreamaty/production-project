import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entity/Article'

export interface ArticlesPageSliceSchema extends EntityState<Article>{
	isLoading?: boolean
	error?: string	

	view: ArticleView;
	
	_inited: boolean
	
	//pagination
	page: number;
	limit: number;
	hasMore: boolean
}