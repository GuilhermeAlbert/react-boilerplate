import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RouteConstants from "./app/constants/route.constants";
import SuspenseLoading from "./resources/components/suspense-loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <p>
            Lorem ipsum
          </p>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
