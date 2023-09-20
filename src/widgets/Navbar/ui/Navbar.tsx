import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/cx'
import cls from './Navbar.module.scss'

export const Navbar = ({ className }: { className?: string }) => {
	const { t } = useTranslation()
	return (
		<div className={cx(cls.navbar, {}, [className])}>
			<div className={cls.links}>/</div>
		</div>
	)
}
