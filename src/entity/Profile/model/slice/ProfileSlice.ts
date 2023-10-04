import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile, ProfileSchema } from '../types/profile'
// import type { RootState } from '../../app/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: ProfileSchema = { 
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined
}
 
export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		changeReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelChanging: (state) => {
			state.readonly = true
			state.form = state.data
			state.validateErrors = undefined
		}
		// setProfileData: (state, action: PayloadAction<Profile>) => {
		// 	state.data = action.payload
		// 	state.readonly = true
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateErrors = undefined
				state.isLoading = true
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.validateErrors = action.payload
			})
	},
})

export const { actions: profileActions } = profileSlice


export const { reducer: profileReducer } = profileSlice
