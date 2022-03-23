import { createSlice } from "@reduxjs/toolkit";
import { ITariff } from "./tariff.interface";

const tariffs: ITariff[] = [
    {
        id: 1,
        user_id: 1,
        type: 'Обычная',
        duration: 30,
        custom: true,
        friend_list: true
    },
    {
        id: 2,
        user_id: 2,
        type: 'Weekend',
        duration: 14,
        custom: false,
        friend_list: true
    }
]

const tariffSlice = createSlice({
    name: "tariffs",
    initialState: {
        tariffs
    },
    reducers: {
        addTariff(state, action) {
            state.tariffs.push({
                id: tariffs.length + 1,
                user_id: action.payload.user_id,
                type: action.payload.type,
                duration: action.payload.duration,
                custom: action.payload.custom,
                friend_list: action.payload.friend_list
            })
        }
    },
});

export const { addTariff } = tariffSlice.actions;
export default tariffSlice.reducer;