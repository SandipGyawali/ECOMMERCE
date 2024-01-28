import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    show: (state) => {
      state.show = true;
    },
    hide: (state) => {
      state.show = false;
    },
  },
});

export const { show, hide } = sideBarSlice.actions;
export default sideBarSlice.reducer;
