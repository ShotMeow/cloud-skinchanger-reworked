import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user.interface";

const users: IUser[] = []

const userSlice = createSlice({
    name: "users",
    initialState: {
        users
    },
    reducers: {
        addUser(state, action) {
            state.users.push({
                id: state.users.length + 1,
                login: action.payload.login,
                email: action.payload.email,
                password: action.payload.password,
                status: 'user'
            })
            localStorage.setItem('users', JSON.stringify(state.users))
            console.log(localStorage)
        },
        setToken(state, action) {
            const current_user = {
                login: action.payload.login,
                password: action.payload.password,
                email: action.payload.email,
                status: action.payload.status
            }
            localStorage.setItem('current_user', JSON.stringify(current_user))
        }
    },
});

export const { addUser, setToken } = userSlice.actions;
export default userSlice.reducer;