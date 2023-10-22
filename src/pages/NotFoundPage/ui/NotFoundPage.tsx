import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Page } from 'widgets/Page/Page'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = ({ className }: { className?: string }) => {
	const { t } = useTranslation()

	return (
		<Page className={cx(cls.notFoundPage, {}, [className])}>
			{t('Page Not Found')}
		</Page>
	)
}
