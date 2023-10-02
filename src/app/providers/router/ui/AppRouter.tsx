import { getUserAuthData } from 'entity/User'
import { Suspense, memo, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {

	const isAuth = useAppSelector(getUserAuthData)

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter(route => {
			if(!isAuth && route.authOnly) {
				return false
			}
			return true
		})
	},[isAuth])

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routes).map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={<div className="page-wrapper">{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default memo(AppRouter)
