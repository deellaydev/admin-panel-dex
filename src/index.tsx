import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import i18n from 'i18next'
import {initReactI18next, useTranslation} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ru', 'en'],
    fallbackLng: "en",
    lng: "ru",
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    saveMissing: true
  });

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