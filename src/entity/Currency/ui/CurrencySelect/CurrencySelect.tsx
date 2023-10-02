import { Currency } from 'entity/Currency/model/types/currency'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { UiSelect } from 'shared/ui/Select'

const options = [
	{ value: Currency.ILS, content: Currency.ILS },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.RUB, content: Currency.RUB }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: {
	className?: string
	value?: Currency
	readonly: boolean
	onChange?: (value: Currency) => void

}) => {
	const { t } = useTranslation()
	
	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	}, [onChange])

	return (
		<UiSelect 
			label={t('Your Currency')}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	)
})