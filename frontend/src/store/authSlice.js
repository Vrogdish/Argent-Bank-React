import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    token: "",
  },
  reducers: {
    authState: (state, action) => {
      state.isLogged = action.payload;
    },
    tokenState: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { authState } = authSlice.actions;
export const { tokenState } = authSlice.actions;
