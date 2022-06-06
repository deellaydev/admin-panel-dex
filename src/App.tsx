import React from 'react';
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
import {Dashboard} from "./common/components/DashBoard/Dashboard";
import {Reports} from "./common/components/DashBoard/Reports";
import {Invoices} from "./modules/invoices/components/Invoices";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path={''} element={<ProtectedMainRoute><DashBoardLayout/></ProtectedMainRoute>}>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
          <Route path={'/reports'} element={<Reports/>}/>
          <Route path={'/documents/invoices'} element={<Invoices/>}/>
          <Route path={'/documents/drafts'} element={<Reports/>}/>
          <Route path={'/documents/templates'} element={<Reports/>}/>
          <Route path={'/customers'} element={<Reports/>}/>
          <Route path={'/settings'} element={<Reports/>}/>
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