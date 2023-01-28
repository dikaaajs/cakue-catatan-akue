import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: undefined,
  email: null,
  username: null,
  paperID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // trigerred when user loggedIn
    SET_USER: (state, action) => {
      const { email, username, paperID } = action.payload;
      state.email = email;
      state.username = username;
      state.paperID = paperID;
      state.isLoggedIn = true;
    },
    // triggered when user logout or haven't accounr
    SET_USER_NULL: (state, action) => {
      state.email = null;
      state.username = null;
      state.paperID = null;
      state.isLoggedIn = false;
    },
  },
});

export const { SET_USER, SET_USER_NULL } = authSlice.actions;
export default authSlice.reducer;
