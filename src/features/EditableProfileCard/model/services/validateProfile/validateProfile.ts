import { Profile } from 'entity/ProfileState'
import { ValidateProfileError } from '../../types/EditableProfileCard'



export const validateProfileData = (profile?: Profile) => {
	if(!profile) {
		return [ValidateProfileError.NO_DATA]
	}
	const {
		age,
		firstName,
		lastName,
	} = profile

	const errors: ValidateProfileError[] = []

	if(!firstName || !lastName) {
		errors.push( ValidateProfileError.INCORRECT_USER_DATA)
	}

	if(!age || !Number.isInteger(age)) {
		errors.push( ValidateProfileError.INCORRECT_AGE)
	}

	return errors


}