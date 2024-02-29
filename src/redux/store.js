import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/user/userSlice";
import cartReducer from "../redux/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
