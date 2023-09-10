import { FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import { cx } from "shared/lib/classNames/cx"
import cls from "./AppLink.module.scss"

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}) => {
	return (
		<Link
			to={to}
			className={cx(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
