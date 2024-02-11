import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slice/sideBar";
import { apiSlice } from "./api/index";

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
