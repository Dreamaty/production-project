import { Country } from 'entity/Country/model/types/country'
import { Currency } from 'entity/Currency'
import {
	ProfileCard, fetchProfileData,
	profileActions,
	profileReducer, useProfile
} from 'entity/Profile'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/storeHooks/storeHooks'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = () => {
	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()

	const { data, error, isLoading, readonly } = useProfile()

	const onChangeFirstName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ 
			firstName: value || '' 
		}))
	}, [dispatch])

	const onChangeLastName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ 
			lastName: value || '' 
		}))
	}, [dispatch])

	const onChangeAge = useCallback((value?: string) => {
	
		
		dispatch(profileActions.updateProfile({ 
			age: Number(value ||  0)
		}))
	}, [dispatch])

	const onChangeCountry = useCallback((country?: Country) => {
		dispatch(profileActions.updateProfile({ 
			country: country 
		}))
	}, [dispatch])

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ 
			city: value || '' 
		}))
	}, [dispatch])

	const onChangeCurrency = useCallback((currency?: Currency) => {
		dispatch(profileActions.updateProfile({ 
			currency: currency 
		}))
	}, [dispatch])


	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount >
			<ProfilePageHeader  />
			
			<ProfileCard 
				data={data} 
				error={error} 
				isLoading={isLoading} 
				readonly={readonly}
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeCountry={onChangeCountry}
				onChangeCurrency={onChangeCurrency}
			/>
		</DynamicModuleLoader>
	)

}

export default ProfilePage