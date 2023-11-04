import { ArticleView } from '@/entity/Article'
import { memo } from 'react'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TileIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { cx } from '@/shared/lib/classNames/cx'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import cls from './ArticleViewSwitcher.module.scss'

const viewTypes = [
	{
		view: ArticleView.BLOCKS,
		icon: TileIcon
	},
	{
		view: ArticleView.LIST,
		icon: ListIcon
	}
]

export const ArticleViewSwitcher = memo(({ className, onViewClick, view }: {
	className?: string
	view: ArticleView,
	onViewClick: (view: ArticleView) => void
}) => {

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView)
	}
		
	return (
		<div className={cx(cls.articleViewSwitcher, {},
			[className])}>
			{viewTypes.map(viewType => (
				<Button 
					theme={ButtonTheme.CLEAR} 
					key={viewType.view} 
					onClick={onClick(viewType.view)}
					className={cx('', { [cls.notSelected]: viewType.view !== view })}
				>
					<Icon  Svg={viewType.icon} />
				</Button>
			))}
		</div>
	)
})