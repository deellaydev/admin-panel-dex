import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

);