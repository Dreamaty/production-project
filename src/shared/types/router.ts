// eslint-disable-next-line dreamatty-path-checker-plugin/layer-imports
import { UserRole } from '@/entities/User'
import { RouteProps } from 'react-router'



export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
	roles?: UserRole[]
}
