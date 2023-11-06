import { memo } from 'react'
import { cx } from '@/shared/lib/classNames/cx'
import cls from './<FTName>.module.scss'

export const <FTName> = memo(({ className }: {className?: string}) => {
		
	return (
		<div className={cx(cls.<FTName | lowercasefirstchar>, {},
			[className])}>

		</div>
	)
})