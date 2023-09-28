import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'
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
})

export const { actions: profileActions } = profileSlice

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const { reducer: profileReducer } = profileSlice
