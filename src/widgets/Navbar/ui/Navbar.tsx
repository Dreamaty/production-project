import { cx } from "shared/lib/classNames/cx"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./Navbar.module.scss"

export const Navbar = ({ className }: { className?: string }) => {
	return (
		<div className={cx(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={"/"}
					className={cls.mainLink}
				>
					Main
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
					About
				</AppLink>
			</div>
		</div>
	)
}
