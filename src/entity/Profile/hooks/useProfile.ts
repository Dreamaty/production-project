import { useAppSelector } from 'shared/lib/hooks/storeHooks/storeHooks'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'

export const useProfile = () => {
	const data = useAppSelector(getProfileForm)
	const error = useAppSelector(getProfileError)
	const isLoading = useAppSelector(getProfileIsLoading)
	const readonly = useAppSelector(getProfileReadonly)



	return { data, error, isLoading, readonly }
}
