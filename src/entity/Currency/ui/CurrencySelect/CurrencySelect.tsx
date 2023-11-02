import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { Listbox } from 'shared/ui/Listbox/Lisbox'
import { Currency } from '../../model/types/currency'

const options = [
	{ value: Currency.ILS, content: Currency.ILS },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.RUB, content: Currency.RUB }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: {
	className?: string
	value?: Currency
	readonly?: boolean
	onChange?: (value: Currency) => void

}) => {
	const { t } = useTranslation()
	
	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	}, [onChange])

	return (
		<Listbox 
			className={cx('', {}, [className])}
			items={options}
			defaultValue={t('Choose Currency')}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
			direction='top right'
			label={t('Your Currency')}
		/>
	)
})