import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userCartClick: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    cartClick: (state) => {
      state.userCartClick = !state.userCartClick;
    },
  },
});

export default userSlice.reducer;
export const { login, cartClick } = userSlice.actions;
