import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartClicked: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export default cartSlice.reducer;
export const { cartClicked } = cartSlice.actions;
