

import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import {
	ProfileCard, fetchProfileData,
	profileStateActions,
	profileStateReducer,
	useProfile
} from 'entity/ProfileState'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/storeHooks/storeHooks'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { TextTheme, UiText } from 'shared/ui/Text'
import { Page } from 'widgets/Page/Page'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
	profile: profileStateReducer
}

const ProfilePage = () => {
	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		dispatch(fetchProfileData(id))
	})



	const { data, error, isLoading, readonly, validateErrors } = useProfile()

	const { id } = useParams<{id: string}>()

	const onChangeFirstName = useCallback((value?: string) => {
		dispatch(profileStateActions.updateProfile({ 
			firstName: value || '' 
		}))
	}, [dispatch])

	const onChangeLastName = useCallback((value?: string) => {
		dispatch(profileStateActions.updateProfile({ 
			lastName: value || '' 
		}))
	}, [dispatch])

	const onChangeAge = useCallback((value?: string) => {
	
		
		dispatch(profileStateActions.updateProfile({ 
			age: Number(value ||  0)
		}))
	}, [dispatch])

	const onChangeCountry = useCallback((country?: Country) => {
		dispatch(profileStateActions.updateProfile({ 
			country: country 
		}))
	}, [dispatch])

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileStateActions.updateProfile({ 
			city: value || '' 
		}))
	}, [dispatch])

	const onChangeCurrency = useCallback((currency?: Currency) => {
		dispatch(profileStateActions.updateProfile({ 
			currency: currency 
		}))
	}, [dispatch])

	
	return (
		<DynamicModuleLoader reducers={reducers} >
			<Page>
				<ProfilePageHeader  />
				{validateErrors?.length && validateErrors.map( error => (
	
					<UiText key={error} theme={TextTheme.ERROR} text={t(error)}/>
				))}
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
			</Page>
			
		</DynamicModuleLoader>
	)

}

export default ProfilePage