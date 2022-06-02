import React from 'react';
import { GlobalStyle } from "./assets/style/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route element={<App />} path={'/'}/>
        <Route element={<Login/>} path={'/login'}/>
      </Routes>
    </>
  );
}

