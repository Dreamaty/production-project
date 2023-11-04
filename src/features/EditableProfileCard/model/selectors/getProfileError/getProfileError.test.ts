import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entity/Country'
import { Currency } from '@/entity/Currency'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
	test('should return data', () => {
		const data = {
			firstName: 'Obi',
			lastName: 'Kenobi',
			age: 33,
			city: 'Tatuin',
			country: Country.Ukraine,
			currency: Currency.USD,
			avatar: 'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg'
		
		}
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'err'
			}
		}
		expect(getProfileError(state as StateSchema)).toEqual(
			'err'
		)
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileError(state as StateSchema)).toEqual(undefined)
	})
})