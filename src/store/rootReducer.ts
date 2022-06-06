import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../modules/auth/authSlice'
import invoicesReducer from '../modules/invoices/invoicesSlice'


export const rootReducer = combineReducers({
  authReducer,
  invoicesReducer
})