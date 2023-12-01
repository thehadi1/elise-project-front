//import rootReducer from './reducers'
import { configureStore } from "@reduxjs/toolkit";
//import { apiSlice } from "./api/apiSlice";
//import authReducer from "../features/auth/authSlice";
//import { useReducer } from "react";
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
