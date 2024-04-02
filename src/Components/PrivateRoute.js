import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.login.auth);
  console.log(isAuth);
  return <div>{isAuth ? children : alert("you required to login first")}</div>;
};

export default PrivateRoute;
