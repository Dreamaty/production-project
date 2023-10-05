import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import cls from './ArticlesPage.module.scss'

const ArticlesPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	return (
		<div className={cx(cls.ariclesPage, {},
			[className])}>
				ArticlesPage
		</div>
	)
}

export default memo(ArticlesPage)