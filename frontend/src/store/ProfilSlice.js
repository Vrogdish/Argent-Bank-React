import { createSlice } from "@reduxjs/toolkit";

export const profilSlice = createSlice({
  name: "profil",
  initialState: {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updateAt: "",
    userName: "",
  },
  reducers: {
    loadProfilState: (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.updateAt = action.payload.updateAt;
      state.userName = action.payload.userName;
    },
    resetProfilState: (state) => {
      state.createdAt = "";
      state.email = "";
      state.firstName = "";
      state.id = "";
      state.lastName = "";
      state.updateAt = "";
      state.userName = "";
    },
    updateUsernameState: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { loadProfilState } = profilSlice.actions;
export const { resetProfilState } = profilSlice.actions;
export const { updateUsernameState } = profilSlice.actions;
