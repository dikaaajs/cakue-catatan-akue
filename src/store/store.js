import { configureStore } from "@reduxjs/toolkit";

// import slice
import accountSlice from "./reducer/accountSlice";
import catatanSlice from "./reducer/catatanSlice";

const store = configureStore({
  reducer: {
    account: accountSlice,
    catatan: catatanSlice,
  },
});

export default store;
