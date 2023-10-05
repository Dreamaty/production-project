import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import cls from './ArticleDetailsPage.module.scss'

const ArticleDetailsPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	return (
		<div className={cx(cls.articleDetailsPage, {},
			[className])}>
				ArticleDetailsPage
		</div>
	)
}

export default memo(ArticleDetailsPage)