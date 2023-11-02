import { Profile } from 'entity/ProfileState/model/types/ProfileState'



export interface ProfileStateSchema {
	data?: Profile
	form?: Profile
	isLoading?: boolean
	error?: string
	readonly: boolean
	validateErrors?: ValidateProfileError[]
}

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	SERVER_ERROR = 'SERVER_ERROR_LOADING_PROFILE',
	NO_ID = 'THERE_IS_NO_PROFILE_ID_IN_REQUEST',
	NO_DATA = 'NO_DATA'
}

