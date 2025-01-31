import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./Slices/MainDataSlice";



export const store = configureStore(
    {
        reducer:{
            [mainSlice.name] : mainSlice.reducer
        }
    }
)