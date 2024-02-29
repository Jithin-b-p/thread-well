import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./addItemsToCart";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartClicked: (state) => {
      state.hidden = !state.hidden;
    },
    itemAdded: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { cartClicked, itemAdded } = cartSlice.actions;
