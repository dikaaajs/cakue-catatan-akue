import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import filterSlice from "./slice/filterSlice";
import papersSlice from "./slice/papersSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    papers: papersSlice,
    filter: filterSlice
})

const store = configureStore({
    reducer: rootReducer
})

export { store }