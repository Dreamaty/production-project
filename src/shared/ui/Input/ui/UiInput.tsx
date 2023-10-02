import React, {
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { Mods, cx } from 'shared/lib/classNames/cx'
import cls from './UiInput.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	placeholder?: string
	onChange?: (value: string) => void
	type?: string
	autoFocus?: boolean
	readonly?: boolean
}

export const UiInput = memo(({
	className,
	value,
	placeholder,
	onChange,
	type = 'text',
	autoFocus,
	readonly = false,
	...otherProps
}: InputProps) => {
	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

	const isCaretVisible = isFocused && !readonly
	
	useEffect(() => {
		if (autoFocus) {
			// setIsFocused(true)
			ref.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSelect = (e: any) => {
		setCaretPosition(e?.target.selectionStart || 0)
	}

	const mods: Mods = {
		[cls.readonly]: readonly
	}

	return (
		<div className={cx(cls.inputWrapper, mods, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					className={cx(cls.input, {}, [className])}
					value={value}
					readOnly= {readonly}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 9.5}px` }}
					/>
				)}
			</div>
		</div>
	)
})
