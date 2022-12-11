import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { userData } from "../types/Types";

export interface UserState {
  userData: {
    name?: string;
    phone?: string;
    email: string;
    password: string;
  };
}

const initialState: UserState = {
  userData: {
    name: "",
    phone: "",
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadUser: (state) => {
      if (localStorage.getItem("user")) {
        state.userData = JSON.parse(localStorage.getItem("user")!);
      }
    },
    signUp: (state, action: PayloadAction<userData>) => {
      state.userData = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      localStorage.removeItem("user");
      state.userData = {
        name: "",
        phone: "",
        email: "",
        password: "",
      };
    },
  },
});

export const { signUp, loadUser, logOut } = userSlice.actions;

export default userSlice.reducer;
