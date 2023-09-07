import { Link } from "react-router-dom"
import { cx } from "shared/lib/classNames/cx"
import { useTheme } from "./providers/ThemeProvider"

import { AppRouter } from "./providers/router"
import "./styles/index.scss"

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cx("app", {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>

			<AppRouter />
		</div>
	)
}

export default App
