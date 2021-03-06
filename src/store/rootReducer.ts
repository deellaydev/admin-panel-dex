import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../modules/auth/authSlice'
import invoicesReducer from '../modules/invoices/invoicesSlice'
import customersReducer from '../modules/customers/customersSlice'
import settingsReducer from '../modules/settings/settingsSlice'
import reportsReducer from '../modules/reports/reportsSlice'


export const rootReducer = combineReducers({
  authReducer,
  invoicesReducer,
  customersReducer,
  settingsReducer,
  reportsReducer
})