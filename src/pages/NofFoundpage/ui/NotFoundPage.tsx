import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = ({ className }: { className?: string }) => {
	const { t } = useTranslation()

	return (
		<div className={cx(cls.notFoundPage, {}, [className])}>
			{t('Page Not Found')}
		</div>
	)
}
