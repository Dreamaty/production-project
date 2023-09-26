import { cx } from 'shared/lib/classNames/cx'

import { userActions } from 'entity/User'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'

const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
