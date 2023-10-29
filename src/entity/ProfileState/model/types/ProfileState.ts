import type { Country } from 'entity/Country'
import type { Currency } from 'entity/Currency'

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	SERVER_ERROR = 'SERVER_ERROR_LOADING_PROFILE',
	NO_ID = 'THERE_IS_NO_PROFILE_ID_IN_REQUEST',
	NO_DATA = 'NO_DATA'
}

export interface Profile {
	id?: string
	firstName?: string,
	lastName?: string,
	age?: number,
	currency?: Currency,
	country?: Country,
	city?: string,
	username?: string,
	avatar?: string
}

export interface ProfileStateSchema {
	data?: Profile;
	form?: Profile
  isLoading?: boolean
  error?: string
  readonly: boolean
	validateErrors?: ValidateProfileError[]
}