import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import userSlice from "../redux/user/userSlice";
import cartSlice from "../redux/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import directorySlice from "./directory/directorySlice";
import shopSlice from "./shop/shopSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     cart: cartReducer,
//   },
// });

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [cartSlice.reducerPath],
};

export const rootReducers = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [cartSlice.reducerPath]: cartSlice.reducer,
  [directorySlice.reducerPath]: directorySlice.reducer,
  [shopSlice.reducerPath]: shopSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
