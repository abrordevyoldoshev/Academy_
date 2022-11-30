import {createSlice} from "@reduxjs/toolkit";

const initialState = {product: []};
export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        CategoryCon: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const {CategoryCon} = categorySlice.actions;
export default categorySlice.reducer;
