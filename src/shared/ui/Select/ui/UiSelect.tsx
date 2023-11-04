import { ChangeEvent, useMemo } from 'react'
import { Mods, cx } from '@/shared/lib/classNames/cx'
import cls from './UiSelect.module.scss'

export interface SelectOption<T extends string> {
	value: T
	content: string
}
export interface UiSelectProps<T extends string>{
	className?: string
	label?: string
	options?: SelectOption<T>[]
	value?: T 
	readonly?: boolean
	onChange?: (value: T) => void
}

export const UiSelect = <T extends string>({
	className,
	label,
	options,
	value,
	readonly,
	onChange 
}: UiSelectProps<T>) => {

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T) 
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
}