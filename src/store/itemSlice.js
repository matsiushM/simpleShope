import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState:{
        items:[]
    },
    reducers: {
        addItem(state,action) {
            state.items.push({
                item: action.payload.item,
            })
        },
        removeItem(state, action) {
            state.items = state.items.filter(basketItems => basketItems.item._id !== action.payload.item._id);

        }
    }
});

export const{addItem, removeItem} = itemSlice.actions;
export default itemSlice.reducer;