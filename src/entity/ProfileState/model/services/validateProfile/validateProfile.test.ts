import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'

import { ValidateProfileError } from '../../types/ProfileState'
import { validateProfileData } from './validateProfile'

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

describe('Validate Profile Data',  () => {
	test('Success to validate profile data', () => {

		const result = validateProfileData(profileValue)

		expect(result).toEqual([])
	})

	test('should return error about first and last name', () => {
		const result = validateProfileData({ ...profileValue, firstName: '', lastName: '' })

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})
	test('should return error about age', () => {
		const result = validateProfileData({ ...profileValue, age: undefined })

		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
	})
	test('should return error about no data', () => {
		const result = validateProfileData()

		expect(result).toEqual([ValidateProfileError.NO_DATA])
	})
	test('should return errors about incorrect inputs', () => {
		const result = validateProfileData({})

		expect(result).toEqual([ ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE])
	})
})