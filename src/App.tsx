import React from 'react';
import { GlobalStyle } from "./assets/style/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthLayout} from "./pages/AuthLayout";
import {LoginForm} from "./common/components/Forms/LoginForm";
import {RegisterForm} from "./common/components/Forms/RegisterForm";
import {DashBoard} from "./pages/DashBoard";
import {ProtectedRoute} from "./common/components/ProtectedRoute/ProtectedRoute";

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Routes>
              <Route path={''} element={<ProtectedRoute><DashBoard/></ProtectedRoute>} />
              <Route path={'/login'} element={<AuthLayout><LoginForm/></AuthLayout>}/>
              <Route path={'/register'} element={<AuthLayout><RegisterForm/></AuthLayout>}/>
            </Routes>
        </>
    )
}