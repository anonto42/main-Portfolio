import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const initialState ={
    projects:[],
    messages:[]
};
const mainSlice = createSlice(
    {
        initialState,
        name:"dataFetch",
        reducers:{
            setDataOfProject: (state, action) => {
                state.projects = action.payload;
            },
            setDataOfMessage: (state, action) => {
                state.messages = action.payload;
            }
        }
    }
);


export default mainSlice;
export const { setDataOfProject , setDataOfMessage } = mainSlice.actions