import { cx } from '@/shared/lib/classNames/cx'

import { userActions } from '@/entities/User'
import { getUserInited } from '@/entities/User/model/selectors/getUserInited/getUserInited'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'

const App = () => {
	const dispatch = useAppDispatch()
	const inited = useAppSelector(getUserInited)

	useEffect(() => {
		dispatch(userActions.initAuthData())

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])

	return (
		<div className={cx('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />

				<div className="content-page">
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App
