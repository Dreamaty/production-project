import { cx } from 'shared/lib/classNames/cx'
import { useTheme } from './providers/ThemeProvider'

import { Suspense, useState } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'

const App = () => {
	const { theme } = useTheme()

	const [isOpen, setIsOpen] = useState(false)

	return (
		<Suspense fallback>
			<div className={cx('app', {}, [theme])}>
				<Navbar />

				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	)
}

export default App
