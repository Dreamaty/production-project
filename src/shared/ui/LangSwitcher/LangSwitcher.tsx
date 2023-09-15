import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/ui/Button'

export const LangSwitcher = ({ className }: { className?: string }) => {
	const { t, i18n } = useTranslation()

	return (
		<Button
			className={cx('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={() => {
				i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
			}}
		>
			{t('Language')}
		</Button>
	)
}
