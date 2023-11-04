import { memo, useCallback } from 'react'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import { cx } from '@/shared/lib/classNames/cx'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/ui/Button'
import { BackgroundType, Icon } from '../Icon/Icon'
import cls from './Code.module.scss'

export const Code = memo(({ className, text }: {className?: string, text: string}) => {

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	}, [text])
		
	return (
		<pre className={cx(cls.code, {},
			[className])}>
			<Button 
				onClick={onCopy}
				theme={ButtonTheme.CLEAR} 
				className={cls.copyBtn}>
				<Icon 
					backgroundType={BackgroundType.STROKE}
					Svg={CopyIcon} 
					className={cls.copyIcon}
				/>
			</Button>
			<code >
				{text}
			</code>
		</pre>
		
	)
})