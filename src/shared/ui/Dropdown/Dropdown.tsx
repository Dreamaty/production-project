
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { cx } from 'shared/lib/classNames/cx'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

interface DropdownItem {
	value?: string,
	content?: ReactNode,
	disabled?: boolean,
	onClick?: () => void
	href?: string
}

interface DropdownProps {
	className?: string,
	items: DropdownItem[],
	trigger: ReactNode,
	direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top left': cls.optionsTopLeft,
	'top right': cls.optionsTopRight
}



export function Dropdown(props: DropdownProps) {

	const {
		className,
		trigger,
		items,
		direction = 'bottom left'
	} = props

	return (
		<Menu as='div' className={cx(cls.dropdown, {}, [className])}>
			<Menu.Button className={cls.btn}>{trigger}</Menu.Button>
			<Menu.Items className={cx(cls.items, {}, [mapDirectionClass[direction]]) }>
				{items.map((item) => {
					const content = ({ active }: {active: boolean}) => (
						<button
							type='button'
							disabled={item.disabled}
							onClick={item.onClick}
							className={cx(cls.item, {
								[cls.active]: active
							}, [])}
						>
							{item.content}
						</button>
					)
					if(item.href) {
						return (
							<Menu.Item disabled={item.disabled} key={item.value} as={AppLink} to={item.href}>
								{content}
							</Menu.Item>
						)
					}

					return (
						<Menu.Item disabled={item.disabled} key={item.value} as={Fragment} >
							{content}
						</Menu.Item>
					)
				}
				)}
			</Menu.Items>
		</Menu>
	)
}