import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
//import { profileActions, profileReducer } from './profileSlice'

const profileValue= {
	firstName: 'Obi',
	lastName: 'Kenobi',
	age: 33,
	city: 'Tatuin',
	country: Country.Ukraine,
	currency: Currency.USD,
	avatar: 'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg',
	username: 'Van'
}


describe('ProfileSlice', () => {
	test('should cancel changing', () => {
		const state: DeepPartial<ProfileSchema> = {
			data: profileValue,
			form: {
				...profileValue,
				firstName: 'Dart',
				lastName: 'Vader'
			}
		}
		//expect(profileReducer(state as ProfileSchema, profileActions.cancelChanging())).toEqual({ data: profileValue, form: profileValue, readonly: true, validateErrors: undefined })
	})
	test('should change readonly to true', () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: true
		}
		//expect(profileReducer(state as ProfileSchema, profileActions.changeReadonly(false))).toEqual({ readonly: false })
	})
	test('should update profile', () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: true
		}
		//expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ ...profileValue, age: 23 }))).toEqual( { form: { ...profileValue, age: 23 }, readonly: true } )
	})
	test('should update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR]
		}
		//expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual( { isLoading: true, validateErrors: undefined } )
	})

})