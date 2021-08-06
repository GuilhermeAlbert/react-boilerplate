import { Redirect, Route } from "react-router-dom";
import RouteConstants from "../../../app/constants/route.constants";
import { SessionService } from "../../../app/services/session.service";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const sessionService: SessionService = SessionService.Instance;

  return (
    <Route
      {...rest}
      render={(props) =>
        sessionService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: RouteConstants.ROOT,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
