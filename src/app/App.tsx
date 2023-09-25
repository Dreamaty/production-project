import { cx } from 'shared/lib/classNames/cx'

import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'

const App = () => {
	return (
		<Suspense fallback>
			<div className={cx('app', {}, [])}>
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
