import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from '@/entity/Article'


export interface ArticlesPageSliceSchema extends EntityState<Article>{
	isLoading?: boolean
	error?: string
	
	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
	view: ArticleView;
	_inited: boolean;
	

}