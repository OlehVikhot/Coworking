import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
