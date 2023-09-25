import React, {
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	placeholder?: string
	onChange?: (value: string) => void
	type?: string
	autoFocus?: boolean
}

export const Input = memo(function Input({
	className,
	value,
	placeholder,
	onChange,
	type = 'text',
	autoFocus,
	...otherProps
}: InputProps) {
	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

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

	return (
		<div className={cx(cls.inputWrapper, {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					className={cx(cls.input, {}, [className])}
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocused && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 9.5}px` }}
					/>
				)}
			</div>
		</div>
	)
})
