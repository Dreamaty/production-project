import { UserRole, getUserAuthData, getUserRoles } from '@/entities/User'

import { getRouteForbidden, getRouteMain } from '@/shared/const/router'
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks'
import { useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children, roles }: {
	children: JSX.Element, roles?: UserRole[] 
}) {
	const auth = useAppSelector(getUserAuthData)
	const location = useLocation()
	const userRoles = useAppSelector(getUserRoles)

	const hasRequiredRoles = useMemo(() => {
		if(!roles) {
			return true
		}
		
		return roles.some(requiredRole => userRoles?.includes(requiredRole))

	}, [roles, userRoles])

	
	if (!auth) {
		return <Navigate to={getRouteMain()} state={{ from: location }} replace />
	}
	
	if(!hasRequiredRoles) {
		return <Navigate to={getRouteForbidden()} state={{ from: location }} replace /> 
	}
	
	return children
}