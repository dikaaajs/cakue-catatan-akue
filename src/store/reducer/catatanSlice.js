import { createSlice } from "@reduxjs/toolkit";

const catatanReduce = createSlice({
  name: "catatan",
  initialState: {
    headline: "",
    content: "",
    createdAt: null,
    updatedAt: null,
  },
  reducers: {
    added: (state, action) => {
      state.headline = action.payload.headline;
      state.content = action.payload.content;
      state.createdAt = new Date();
      state.updatedAt = new Date();
    },
  },
});

export const { added } = catatanReduce.actions;
export default catatanReduce.reducer;
