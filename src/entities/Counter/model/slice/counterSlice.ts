import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/counterSchema'
// import type { RootState } from '../../app/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: CounterSchema = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
	},
})

export const { actions: counterActions } = counterSlice

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const { reducer: counterReducer } = counterSlice
