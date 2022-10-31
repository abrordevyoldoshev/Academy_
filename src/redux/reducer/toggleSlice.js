import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: "toggle",
    initialState: { toggle:false},
    reducers: {
        addToToggle(state,action) {
            state.toggle =action
        }
    }
});

export const { addToToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
