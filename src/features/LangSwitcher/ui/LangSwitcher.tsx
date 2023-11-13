import { cx } from '@/shared/lib/classNames/cx'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../shared/ui/Button'
import { ButtonTheme } from '../../../shared/ui/Button/ui/Button'

export const LangSwitcher = memo(({
	className,
	short,
}: {
	className?: string
	short?: boolean
}) => {
	const { t, i18n } = useTranslation()

	return (
		<Button
			className={cx('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={() => {
				i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
			}}
		>
			{t(short ? 'Lang' : 'Language')}
		</Button>
	)
})