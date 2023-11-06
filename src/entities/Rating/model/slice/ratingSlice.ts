import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RatingSchema } from '../types/Rating'

const initialState: RatingSchema = {
	
}

export const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		reducer: (state, action:PayloadAction<string>) => {
			
		}
	},
	//extraReducers: (builder) => {
	//	builder
	//		.addCase(asyncThunkName.pending, (state) => {
	//			state.error = undefined
	//			state.isLoading = true
	//		})
	//		.addCase(asyncThunkName.fulfilled, (state) => {
	//			state.isLoading = false
	//		})
	//		.addCase(asyncThunkName.rejected, (state, action) => {
	//			state.isLoading = false
	//			state.error = action.payload
	//		})
	//},
})

export const { actions: ratingActions } = ratingSlice

export const { reducer: ratingReducer } = ratingSlice
