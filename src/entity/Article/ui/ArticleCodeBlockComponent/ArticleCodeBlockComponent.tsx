import { memo } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { Code } from 'shared/ui/Code/Code'
import { ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'

export const ArticleCodeBlockComponent = memo(({ className, block }: {
	className?: string,
	 block: ArticleCodeBlock
	}) => {
		
	return (
		<div className={cx(cls.articleCodeBlockComponent, {},
			[className])}>
			<Code text={block.code} />
		</div>
	)
})