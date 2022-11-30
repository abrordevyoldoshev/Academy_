import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    container:[]
}
export const allProductSlice =  createSlice({
    name:'product',
    initialState,
    reducers:{
        addProducts:(state,action)=>{
            const {payload}= action
            state.container = payload
        }
    }
})

export const {addProducts} = allProductSlice.actions;
export default allProductSlice.reducer;
