import { profileReducer } from 'entity/Profile'
import { useTranslation } from 'react-i18next'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = () => {
	const { t } = useTranslation('ProfilePage')
	return <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
		<div>
			
		</div>

	</DynamicModuleLoader>

}

export default ProfilePage