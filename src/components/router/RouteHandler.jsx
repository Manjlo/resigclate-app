import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Geoviewer  from "../screens/Geoviewer";
import { PRINCIPAL_PATH, LOGIN_PATH, REGISTER_PATH, APP } from "./routes";
import LoadingController from "../screens/loading/LoadingController";

const RouteProtected = ({ children, redirectTo }) => {
  return true ? children : <Navigate to={redirectTo} />;
};

function RouteHandler() {
  return (
      <Routes>
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={REGISTER_PATH} element={<Register />} />
        <Route
          path={APP}
          element={
            <RouteProtected redirectTo={Login}>
              <Geoviewer />
            </RouteProtected>
          }
        />
        <Route path={PRINCIPAL_PATH} element={<LoadingController />} />
      </Routes>
  );
}

export default RouteHandler;