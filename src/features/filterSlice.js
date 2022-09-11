import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: 'All',
	colors: [],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: initialState,
	reducers: {
		statusChanged: (state, action) => {
			state.status = action.payload
		},
		colorAdded: (state, action) => {
			state.colors.push(action.payload);
		},
		colorRemoved: (state, action) => {
			state.colors = state.colors.filter((existingColor) => existingColor !== action.payload);
		}
	},
});

export const {colorChanged, statusChanged, colorAdded, colorRemoved } = filterSlice.actions;
export default filterSlice.reducer;