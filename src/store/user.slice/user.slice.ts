import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user.interface";

const users: IUser[] = [
    {
        id: 1,
        login: 'admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        status: 'admin',
    },
    {
        id: 2,
        login: 'user',
        email: 'user@mail.ru',
        password: 'user1234',
        status: 'user'
    },
]

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
        },
        setToken(state, action) {
            const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
            state.users[action.payload].token = token
            localStorage.setItem('token', token)
        }
    },
});

export const { addUser, setToken } = userSlice.actions;
export default userSlice.reducer;