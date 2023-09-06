import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { cx } from "./helpers/classNames/cx"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import "./styles/index.scss"
import { useTheme } from "./theme/useTheme"

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={cx("app", {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
