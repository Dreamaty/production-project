import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from '@/shared/lib/classNames/cx'
import { Listbox } from '@/shared/ui/Popups'
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
		<Listbox 
			className={cx('',{}, [className])}
			items={options}
			defaultValue={t('Choose a Country')}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
			direction='top left'
			label={t('Your Country')}
		/>
	)
})