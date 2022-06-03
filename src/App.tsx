import React from 'react';
import { GlobalStyle } from "./assets/style/GlobalStyle";
import {Route, Routes} from "react-router-dom";
import {AuthLayout} from "./pages/AuthLayout";
import {LoginForm} from "./common/components/Forms/LoginForm";
import {RegisterForm} from "./common/components/Forms/RegisterForm";
import {DashBoard} from "./pages/DashBoard";
import {
  ProtectedMainRoute,
  ProtectedAuthRoute,
  ProtectedRestoreRoute
} from "./common/components/ProtectedRoute/ProtectedRoute";
import {ForgetPasswordForm} from "./common/components/Forms/ForgetPasswordForm";
import {RestorePassword} from "./common/components/Forms/RestorePassword";

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Routes>
              <Route path={''} element={<ProtectedMainRoute><DashBoard/></ProtectedMainRoute>} />
              <Route path={'/login'} element={<ProtectedAuthRoute><AuthLayout><LoginForm/></AuthLayout></ProtectedAuthRoute>}/>
              <Route path={'/register'} element={<ProtectedAuthRoute><AuthLayout><RegisterForm/></AuthLayout></ProtectedAuthRoute>}/>
              <Route path={'/restorePassword'} element={<ProtectedAuthRoute><AuthLayout><ForgetPasswordForm/></AuthLayout></ProtectedAuthRoute>}/>
              <Route path={'/restorePasswordSuccess'} element={<ProtectedRestoreRoute><AuthLayout><RestorePassword/></AuthLayout></ProtectedRestoreRoute>}/>
            </Routes>
        </>
    )
}