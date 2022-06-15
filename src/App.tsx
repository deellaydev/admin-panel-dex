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
import {Dashboard} from "./modules/dashboard/components/Dashboard";
import {Invoices} from "./modules/invoices/components/Invoices";
import {Customers} from "./modules/customers/components/Customers";
import {Settings} from "./modules/settings/components/Settings";
import {Reports} from "./modules/reports/components/Reports";
import {Contact} from "./modules/contact/components/Contact";
import {Templates} from "./modules/templates/components/Templates";
import {Drafts} from "./modules/drafts/components/Drafts";

export const App = () => {

  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path={''} element={<ProtectedMainRoute><DashBoardLayout/></ProtectedMainRoute>}>
          <Route path={''} element={<Dashboard/>}/>
          <Route path={'/reports'} element={<Reports/>}/>
          <Route path={'/documents/invoices'} element={<Invoices/>}/>
          <Route path={'/documents/drafts'} element={<Drafts/>}/>
          <Route path={'/documents/templates'} element={<Templates/>}/>
          <Route path={'/customers'} element={<Customers/>}/>
          <Route path={'/settings'} element={<Settings/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
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
