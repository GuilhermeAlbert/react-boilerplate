import { lazy } from "react";
import { Route } from "react-router-dom";
import RouteConstants from "../constants/route.constants";

function AuthRoutes() {
  return (
    <>
      <Route
        path={RouteConstants.SIGN_IN}
        component={lazy(() => import("../../pages/auth/sign-in"))}
        exact
      />
    </>
  );
}

export default AuthRoutes;
