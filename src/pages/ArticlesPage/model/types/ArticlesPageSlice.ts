import { Article, ArticleView } from '@/entities/Article'
import { EntityState } from '@reduxjs/toolkit'


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