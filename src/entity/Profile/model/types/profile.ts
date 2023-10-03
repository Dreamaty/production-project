import { Country } from 'entity/Country/model/types/country'
import { Currency } from 'entity/Currency'

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	SERVER_ERROR = 'SERVER_ERROR_LOADING_PROFILE',
	NO_DATA = 'NO_DATA'
}

export interface Profile {
  
    firstName?: string,
    lastName?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string

}

export interface ProfileSchema {
  data?: Profile;
	form?: Profile
  isLoading?: boolean
  error?: string
  readonly: boolean
	validateErrors?: ValidateProfileError[]
}