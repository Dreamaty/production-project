import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {  <FTName>Schema } from '../types/<FTName>'

const initialState: <FTName>Schema = {
	
}

export const <FTName | lowercasefirstchar>Slice = createSlice({
	name: '<FTName | lowercasefirstchar>',
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

export const { actions: <FTName | lowercasefirstchar>Actions } = <FTName | lowercasefirstchar>Slice

export const { reducer: <FTName | lowercasefirstchar>Reducer } = <FTName | lowercasefirstchar>Slice
