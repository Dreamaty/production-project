import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'
// Define a type for the slice state
// Define the initial state using that type
var initialState = {};
export var counterSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
});
export var userActions = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export var userReducer = counterSlice.reducer;
