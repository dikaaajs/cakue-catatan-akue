import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  papers: [],
};

const paperSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    SET_PAPERS: (state, action) => {
      state.papers = action.payload;
    },
    UPDATE_PAPERS: (state, action) => {
      const objectNew = action.payload
      return { ...state, objectNew }
    },
  },
});

export const { SET_PAPERS, UPDATE_PAPERS } = paperSlice.actions;
export default paperSlice.reducer;
