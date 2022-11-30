import { createSlice } from "@reduxjs/toolkit";
const initialState = { names: [] };
export const userNameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    nameData: (state, action) => {
      state.names = action.payload;
    },
  },
});

export const { nameData } = userNameSlice.actions;
export default userNameSlice.reducer;
