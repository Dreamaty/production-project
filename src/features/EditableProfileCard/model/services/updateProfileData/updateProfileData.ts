import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

import { Profile } from '@/entity/ProfileState'
import { ValidateProfileError } from '../../consts/consts'
import { validateProfileData } from '../validateProfile/validateProfile'

export const updateProfileData = createAsyncThunk<
	Profile, 
	string | undefined, 
	ThunkConfig<ValidateProfileError[]>
>(
	'profile/updateProfileData',
	async (profileId, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi
		if(!profileId) return rejectWithValue([ValidateProfileError.NO_ID])

		const formData = getProfileForm(getState())

		const errors = validateProfileData(formData)

		if(errors.length) {
			return rejectWithValue(errors)
		}
		try {
			const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData)

			if(!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	},
)
