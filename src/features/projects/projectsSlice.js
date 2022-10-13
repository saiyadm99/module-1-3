import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dragId: undefined
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
			storDragStart: (state, action) => {
				state.dragId = action.payload
			}
		},
});

export const {storDragStart} = projectsSlice.actions;
export default projectsSlice.reducer;
