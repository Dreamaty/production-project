import { ChangeEvent, memo, useMemo } from 'react'
import { Mods, cx } from 'shared/lib/classNames/cx'
import cls from './UiSelect.module.scss'

export interface SelectOption {
	value: string
	content: string
}
export interface UiSelectProps{
	className?: string
	label?: string
	options?: SelectOption[]
	value?: string 
	readonly?: boolean
	onChange?: (value: string) => void
}

export const UiSelect = memo(
	function UiSelect({
		className,
		label,
		options,
		value,
		readonly,
		onChange 
	}: UiSelectProps) {

		const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
			onChange?.(e.target.value)
		}

		const optionsList = useMemo(() =>  options?.map( opt => (
			<option 
				className={cls.option}
				key={opt.value}
				value={opt.value}
			>
				{opt.content}
			</option>
		))
		, [options])

		const mods: Mods = {
			[cls.readonly]: readonly
		}
		
		return (
			<div className={cx(cls.wrapper, mods,
				[className])}>
				{label && (
					<span className={cls.label}>
						{`${label}>`}
					</span>
				)}
				<select 	
					className={cls.select}
					value={value}
					onChange={onChangeHandler}
					disabled={readonly}
				>
					{optionsList}
				</select>
			</div>
		)
	})