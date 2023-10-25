import { FC, lazy } from 'react'
import { ArticleEditPageProps } from './ArticleEditPage'

export const ArticleEditPageAsync = lazy<FC<ArticleEditPageProps>>(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./ArticleEditPage')), 1500)
		}),
)
