import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action, "action");

            const newItem = action.payload;
            const alreadyAdded = state.items.find(item => item.id === newItem.id);
            if (!alreadyAdded) {
                state.items.push(newItem);
            }
        },

        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);

        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;




