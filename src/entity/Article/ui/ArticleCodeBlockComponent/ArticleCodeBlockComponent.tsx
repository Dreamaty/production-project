import { memo } from 'react'
import { Code } from '@/shared/ui/Code/Code'
import { ArticleCodeBlock } from '../../model/types/article'

export const ArticleCodeBlockComponent = memo(({ className, block }: {
	className?: string,
	 block: ArticleCodeBlock
	}) => {
		
	return (
		<div className={className}>
			<Code text={block.code} />
		</div>
	)
})