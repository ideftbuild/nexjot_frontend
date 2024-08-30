import documentsReducer from "./reducer.js";
import {configureStore} from "@reduxjs/toolkit";


export const store =
    configureStore({
        reducer: {
            documents: documentsReducer
        }
    })

export default store;