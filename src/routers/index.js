import {mainRouter} from "./config";
import { HashRouter, Route, Switch} from "react-router-dom";
import React from "react";
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
const BasicRoute = () => {
  return (
    <HashRouter>
    <Switch>
      {
        mainRouter.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
        ))
      }
    </Switch>
  </HashRouter>
  );
};


export default BasicRoute;