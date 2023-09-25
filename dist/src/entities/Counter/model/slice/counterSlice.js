import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'
// Define a type for the slice state
// Define the initial state using that type
var initialState = {
    value: 0,
};
export var counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state) {
            state.value += 1;
        },
        decrement: function (state) {
            state.value -= 1;
        },
    },
});
export var counterActions = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export var counterReducer = counterSlice.reducer;
