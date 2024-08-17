import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: !!localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export const { handleIsAuth } = authSlice.actions;

export default authSlice.reducer;
