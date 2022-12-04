import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    update: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    test: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { update, test } = accountSlice.actions;
export default accountSlice.reducer;
