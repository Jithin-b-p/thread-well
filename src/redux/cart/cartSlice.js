import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./addItemsToCart";
import { reduceItemsFromTheCart } from "./reduceItemsFromTheCart";
import { removeItemFromTheCart } from "./removeItemFromTheCart";

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
    quantityReduced: (state, action) => {
      state.cartItems = reduceItemsFromTheCart(state.cartItems, action.payload);
    },
    itemRemoved: (state, action) => {
      state.cartItems = removeItemFromTheCart(state.cartItems, action.payload);
    },
  },
});

export default cartSlice;
export const { cartClicked, itemAdded, quantityReduced, itemRemoved } =
  cartSlice.actions;
