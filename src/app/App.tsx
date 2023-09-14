import { cx } from "shared/lib/classNames/cx"
import { useTheme } from "./providers/ThemeProvider"

import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { AppRouter } from "./providers/router"
import "./styles/index.scss"
const Component = () => {
	const { t, i18n } = useTranslation()

	return (
		<div>
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

const App = () => {
	const { theme } = useTheme()

	return (
		<Suspense fallback>
			<div className={cx("app", {}, [theme])}>
				<Navbar />
				<Component />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	)
}

export default App
