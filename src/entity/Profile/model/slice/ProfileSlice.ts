import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
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
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: profileActions } = profileSlice

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const { reducer: profileReducer } = profileSlice
