import React, {useEffect} from 'react';
import {GlobalStyle} from "./assets/style/GlobalStyle";
import {Route, Routes} from "react-router-dom";
import {AuthLayout} from "./pages/AuthLayout";
import {LoginForm} from "./modules/auth/components/LoginForm";
import {RegisterForm} from "./modules/auth/components/RegisterForm";
import {DashBoardLayout} from "./pages/DashBoardLayout";
import {
  ProtectedMainRoute,
  ProtectedAuthRoute,
  ProtectedRestoreRoute
} from "./common/components/ProtectedRoute/ProtectedRoute";
import {ForgetPasswordForm} from "./modules/auth/components/ForgetPasswordForm";
import {RestorePassword} from "./modules/auth/components/RestorePassword";
import {NewPasswordForm} from "./modules/auth/components/NewPasswordForm";
import {Dashboard} from "./modules/dashboard/components/Dashboard";
import {Invoices} from "./modules/invoices/components/Invoices";
import {Customers} from "./modules/customers/components/Customers";
import {Settings} from "./modules/settings/components/Settings";
import {useAppDispatch, useAppSelector} from "./store/hooks/hooks";
import {message} from "antd";
import {clearErrorAuth} from "./modules/auth/authSlice";
import {Reports} from "./modules/reports/components/Reports";
import {clearErrorCustomers} from "./modules/customers/customersSlice";
import {clearErrorInvoice} from "./modules/invoices/invoicesSlice";
import {clearErrorSettings} from "./modules/settings/settingsSlice";
import {clearErrorReports} from "./modules/reports/reportsSlice";

export const App = () => {

  // const dispatch = useAppDispatch()
  //
  // const authError = useAppSelector((state) => state.authReducer.error)
  // const customersError = useAppSelector((state) => state.customersReducer.error)
  // const invoicesError = useAppSelector((state) => state.invoicesReducer.error)
  // const settingsError = useAppSelector((state) => state.settingsReducer.error)
  //
  // useEffect(() => {
  //   if (!authError) {
  //     message.error(authError).then();
  //     dispatch(clearErrorAuth())
  //   } else if (!customersError) {
  //     message.error(customersError).then()
  //     dispatch(clearErrorCustomers())
  //   } else if (!invoicesError) {
  //     message.error(invoicesError).then()
  //     dispatch(clearErrorInvoice())
  //   } else if (!settingsError) {
  //     message.error(settingsError).then()
  //     dispatch(clearErrorSettings())
  //   }
  // }, [authError, customersError, invoicesError, settingsError])


  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path={''} element={<ProtectedMainRoute><DashBoardLayout/></ProtectedMainRoute>}>
          <Route path={''} element={<Dashboard/>}/>
          <Route path={'/reports'} element={<Reports/>}/>
          <Route path={'/documents/invoices'} element={<Invoices/>}/>
          <Route path={'/documents/drafts'} element={<Reports/>}/>
          <Route path={'/documents/templates'} element={<Reports/>}/>
          <Route path={'/customers'} element={<Customers/>}/>
          <Route path={'/settings'} element={<Settings/>}/>
          <Route path={'/help'} element={<Reports/>}/>
        </Route>
        <Route path={'/login'}
               element={<ProtectedAuthRoute><AuthLayout><LoginForm/></AuthLayout></ProtectedAuthRoute>}/>
        <Route path={'/register'}
               element={<ProtectedAuthRoute><AuthLayout><RegisterForm/></AuthLayout></ProtectedAuthRoute>}/>
        <Route path={'/restorePassword'}
               element={<ProtectedAuthRoute><AuthLayout><ForgetPasswordForm/></AuthLayout></ProtectedAuthRoute>}/>
        <Route path={'/restorePasswordSuccess'}
               element={<ProtectedRestoreRoute><AuthLayout><RestorePassword/></AuthLayout></ProtectedRestoreRoute>}/>
        <Route path={'/changePassword'}
               element={<ProtectedRestoreRoute><AuthLayout><NewPasswordForm/></AuthLayout></ProtectedRestoreRoute>}/>
      </Routes>
    </>
  )
}