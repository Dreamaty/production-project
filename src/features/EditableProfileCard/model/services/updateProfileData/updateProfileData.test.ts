import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'


import { ValidateProfileError } from '../../consts/consts'
import { updateProfileData } from './updateProfileData'


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

describe('updateProfileData',  () => {
	test('Success to update profile data', async () => {
		
	
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: profileValue,
			}
		})
		thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }))

		const result = await thunk.callThunk('1')

		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(profileValue)
	})

	test('should return error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: profileValue,
			}
		})
		thunk.api.put.mockReturnValue(Promise.resolve({ stats: 403 }))
		const result = await thunk.callThunk('1')

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})

	test('should validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...profileValue, lastName:'' },
			}
		})
		thunk.api.put.mockReturnValue(Promise.resolve({ stats: 403 }))
		const result = await thunk.callThunk('1')

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})
})