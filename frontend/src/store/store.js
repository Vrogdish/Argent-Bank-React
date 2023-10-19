import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { profilSlice } from "./ProfilSlice";


export const mainStore = configureStore({
    reducer : {
        authState : authSlice.reducer,
        profilState : profilSlice.reducer
    }
})