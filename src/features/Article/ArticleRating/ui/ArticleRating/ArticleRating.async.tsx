import { Skeleton } from '@/shared/ui/Skeleton'
import { Suspense, lazy } from 'react'
import { ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback={<Skeleton width={'100%'} height={120} />}>
			<ArticleRatingLazy {...props}/>
		</Suspense>
	)
}