import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    container:[]
}
export const allCourseSlice =  createSlice({
    name:'course',
    initialState,
    reducers:{
        addCourseRedux:(state,action)=>{
            state.container = action.payload
        }
    }
})

export const {addCourseRedux} = allCourseSlice.actions;
export default allCourseSlice.reducer;
