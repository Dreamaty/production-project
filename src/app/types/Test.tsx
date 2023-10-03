import { cx } from 'shared/lib/classNames/cx'
import cls  from './Test.module.scss'

export const Test = ({ className }: {className?: string}) => {
		
	return (
		<div className={cx(cls.test, {},
			[className])}>

		</div>
	)
}