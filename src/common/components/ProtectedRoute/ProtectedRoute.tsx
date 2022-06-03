import React, {FC} from 'react';
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children} : {children: JSX.Element}) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to='/login' replace/>
  }
  return children
};