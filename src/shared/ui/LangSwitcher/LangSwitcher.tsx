import { useTranslation } from "react-i18next"
import { cx } from "shared/lib/classNames/cx"
import cls from "./LangSwitcher.module.scss"

export const LangSwitcher = ({ className }: { className?: string }) => {
	const { t, i18n } = useTranslation()

	return (
		<div className={cx(cls.langSwitcher, {}, [className])}>
			<button
				onClick={() => {
					i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
				}}
			>
				{t("Change language")}
			</button>
			{t("Test")}
		</div>
	)
}
