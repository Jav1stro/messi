import { configureStore } from "@reduxjs/toolkit";

// reducers
import userReducer from "./slices/user/userSlice";
import cartReducer from "./slices/cart/cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
