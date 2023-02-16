import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBy: "time",
    status: "asc",
};

const filterSlice = createSlice({
    name: "filterPaper",
    initialState,
    reducers: {
        SET_FILTERBY: (state, action) => {
            state.filterBy = action.payload
        },
        SET_STATUS: (state, action) => {
            state.status = action.payload
        },

    },
});

export const { SET_FILTERBY, SET_STATUS } = filterSlice.actions;
export default filterSlice.reducer;
