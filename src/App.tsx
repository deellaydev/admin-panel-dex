import React from 'react';
import { GlobalStyle } from "./assets/style/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {AuthLayout} from "./pages/AuthLayout";
import {LoginForm} from "./common/components/LoginForm";
import {RegisterForm} from "./common/components/RegisterForm";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path={''} element={<AuthLayout/>}>
          <Route path={'/login'} element={<LoginForm/>}/>
          <Route path={'/register'} element={<RegisterForm/>}/>
        </Route>
        <Route element={<App />} path={'/'}/>
      </Routes>
    </>
  );
}

