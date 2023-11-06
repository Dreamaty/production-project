import { memo } from 'react'
import { cx } from '@/shared/lib/classNames/cx'
import { UiText } from '@/shared/ui/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

export const ArticleTextBlockComponent = memo(({ 
	className,
	 block 
}: {
	className?: string, 
	block: ArticleTextBlock
}) => {
		
	return (
		<div className={cx(cls.articleTextBlockComponent, {},
			[className])}>
			{block.title ?? (
				<UiText title={block.title} className={cls.title}/> 
			)}
			{block.paragraphs.map((paragraph, index) => (
				<UiText key={paragraph + index} text={paragraph} className={cls.paragraph} />
			))}
		</div>
	)
})