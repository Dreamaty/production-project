import { useTranslation } from 'react-i18next'
import { cx } from '@/shared/lib/classNames/cx'
import { Button } from '@/shared/ui/Button'
import cls from './PageError.module.scss'

export const PageError = ({ className }: { className?: string }) => {
	const { t } = useTranslation('error')
	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={cx(cls.pageError, {}, [className])}>
			<p>{t('An unexpected error has accrued')}</p>
			<Button onClick={reloadPage}>{t('Reload Page')}</Button>
		</div>
	)
}
