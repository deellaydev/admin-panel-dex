import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../modules/auth/authSlice'
import invoicesReducer from '../modules/invoices/invoicesSlice'
import customersReducer from '../modules/customers/customersSlice'


export const rootReducer = combineReducers({
  authReducer,
  invoicesReducer,
  customersReducer
})