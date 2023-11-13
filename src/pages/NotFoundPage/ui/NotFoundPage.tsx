import { cx } from '@/shared/lib/classNames/cx'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = ({ className }: { className?: string }) => {
	const { t } = useTranslation()

	return (
		<Page data-testid='NotFoundPage' className={cx(cls.notFoundPage, {}, [className])}>
			{t('Page Not Found')}
		</Page>
	)
}
