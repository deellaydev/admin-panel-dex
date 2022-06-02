import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path={'/'}/>
      <Route element={<Login/>} path={'/login'}/>
    </Routes>
  </BrowserRouter>

);