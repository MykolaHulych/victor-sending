import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, component }) => {
  const { isAuth } = useSelector(state => state.auth);

  return isAuth === true ? <Route path={path} exact component={component} /> : <Redirect to='/login' />;
};

export default ProtectedRoute;