import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import papersSlice from "./slice/papersSlice";

const  rootReducer =  combineReducers({
    auth : authSlice,
    papers : papersSlice
})

const store = configureStore({
    reducer: rootReducer
})

export {store}