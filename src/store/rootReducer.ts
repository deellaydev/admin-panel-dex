import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../modules/auth/authSlice'


export const rootReducer = combineReducers({
  authReducer
})