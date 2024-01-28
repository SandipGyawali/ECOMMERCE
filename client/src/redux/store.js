import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slice/sideBar";

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});
