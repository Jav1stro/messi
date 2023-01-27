import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  fullName: null,
  email: null,
  password: null,
  age: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.password = action.payload.passwoard;
      state.age = action.payload.age;
    },
    unsetUser: (state) => {
      state.age = null;
      state.email = null;
      state.password = null;
      state.fullName = null;
      state.id = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
