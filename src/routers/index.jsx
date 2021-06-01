import Routes from "./config";
import { HashRouter, Route, Switch} from "react-router-dom";
import React, {Suspense} from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export function RouteWithSubRoutes(prop) {
  return (
    <Route
      path={prop.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <prop.component {...props} routes={prop.routes} power= {prop.power || 0} />
      )}
    />
  );
}
const Router = () => (
  <Suspense fallback={<Spin indicator={antIcon} />}>
    <HashRouter>
    <Switch>
      {
        Routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
        ))
      }
    </Switch>
  </HashRouter>
  </Suspense>
);
export default Router;