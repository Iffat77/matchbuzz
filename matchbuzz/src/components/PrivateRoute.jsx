import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!auth.currentUser;

  return isAuthenticated ? (
    <>{children}</>  
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
