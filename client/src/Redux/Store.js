import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,   // <--- now thunks will dispatch actions into this slice
  },
});

export default Store;