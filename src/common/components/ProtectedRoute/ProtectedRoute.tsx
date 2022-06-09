import React from 'react';
import {Navigate} from "react-router-dom";

export const ProtectedMainRoute = ({children} : {children: JSX.Element}) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' replace/>
  }
  return children
};

export const ProtectedAuthRoute = ({children} : {children: JSX.Element}) => {
  if (localStorage.getItem('user')) {
    return <Navigate to={'/'} replace/>
  }
  return children;
}

export const ProtectedRestoreRoute = ({children} : {children: JSX.Element}) => {
  if (!localStorage.getItem('restorePasswordUser')) {
    return <Navigate to={'/'} replace/>
  }
  return children;
}