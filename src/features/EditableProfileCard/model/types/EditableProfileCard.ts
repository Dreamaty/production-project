import { Profile } from '@/entities/ProfileState/model/types/ProfileState'
import { ValidateProfileError } from '../consts/consts'



export interface ProfileStateSchema {
	data?: Profile
	form?: Profile
	isLoading?: boolean
	error?: string
	readonly: boolean
	validateErrors?: ValidateProfileError[]
}

