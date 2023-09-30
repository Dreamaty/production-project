import { ProfileCard, fetchProfileData, profileReducer } from 'entity/Profile'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/storeHooks/storeHooks'

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = () => {
	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
		<ProfileCard/>
	</DynamicModuleLoader>

}

export default ProfilePage