import { createSlice } from "@reduxjs/toolkit";






const initialState ={
    projects:[],
    messages:[]
};



const mainSlice = createSlice(
    {
        initialState,
        name:"dataFetch",
        reducers:{
            setData: (state, action) => {
                state.data = action.payload;
            }
        }
    }
);


export default mainSlice;
export const { setData } = mainSlice.actions