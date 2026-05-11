import { configureStore } from "@reduxjs/toolkit";
import  axiousReducer  from "../features/axious/axiousSlice";

export const store = configureStore({
    reducer: {
        API:axiousReducer
    }

})