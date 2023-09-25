import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'
// import type { RootState } from '../../app/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserSchema = {}

export const counterSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const { actions: userActions } = counterSlice

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const { reducer: userReducer } = counterSlice
