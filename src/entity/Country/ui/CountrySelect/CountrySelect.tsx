import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import { UiSelect } from 'shared/ui/Select'
import { Country } from '../../model/types/country'

const options = [
	{ value: Country.Israel, content: Country.Israel },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: {
	className?: string
	value?: Country
	readonly?: boolean
	onChange?: (value: Country) => void

}) => {
	const { t } = useTranslation()
	
	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country)
	}, [onChange])

	return (
		<UiSelect 
			className={cx('',{}, [className])}
			label={t('Your Country')}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	)
})