import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: "",
  productsList: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
