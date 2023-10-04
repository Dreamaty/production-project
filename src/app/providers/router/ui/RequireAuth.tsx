import { getUserAuthData } from 'entity/User'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'

export function RequireAuth({ children }: {children: JSX.Element}) {
	const auth = useAppSelector(getUserAuthData)
	const location = useLocation()

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace />
	}

	return children
}