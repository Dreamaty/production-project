import { ArticleDetails } from 'entity/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { cx } from 'shared/lib/classNames/cx'
import cls from './ArticleDetailsPage.module.scss'

const ArticleDetailsPage = ({ className }: {className?: string}) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	if(!id ) {
		return (
			<div className={cx(cls.articleDetailsPage, {},
				[className])}>
				{t('Article is not found')}
			</div>
		)
	}

	return (
		<div className={cx(cls.articleDetailsPage, {},
			[className])}>
			<ArticleDetails id={ id }/>
		</div>
	)
}

export default memo(ArticleDetailsPage)