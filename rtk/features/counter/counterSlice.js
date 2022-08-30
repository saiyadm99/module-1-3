const {createSlice} = require('@reduxjs/toolkit');

// initial state
const initialState = {
	count: 0,
}

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state, action) => {
			state.count = state.count + 1;
		},
		decrement: (state, action) => {
			state.count = state.count - 1;
		}
	}
})

module.exports = counterSlice.reducer;

module.exports.counterActions = counterSlice.actions;