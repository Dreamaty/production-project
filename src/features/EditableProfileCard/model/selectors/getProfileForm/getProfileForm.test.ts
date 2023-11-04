import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entity/Country'
import { Currency } from '@/entity/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
	test('should return data', () => {
		const form = {
			firstName: 'Obi',
			lastName: 'Kenobi',
			age: 33,
			city: 'Tatuin',
			country: Country.Ukraine,
			currency: Currency.USD,
			avatar: 'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg',
			username: 'Van'
		}
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: form
			}
		}
		expect(getProfileForm(state as StateSchema)).toEqual(
			form
		)
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileForm(state as StateSchema)).toEqual(undefined)
	})
})