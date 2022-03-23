import { configureStore } from "@reduxjs/toolkit";
import tariffReducer from "./tariffs.slice/tariff.slice";
import userReducer from './user.slice/user.slice';


export const store = configureStore({
    reducer: {
        users: userReducer,
        tariffs: tariffReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch