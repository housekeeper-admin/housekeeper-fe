import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import routes from "../../routers/manage.child";
import { RouteWithSubRoutes } from "../../routers/index";
export default function Manage() {
  return (
    <Fragment>
      <Switch>
        {
          routes.map((route, i) => {
            console.log(route, i);
            return (<RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>);
          })
        }
      </Switch>
    </Fragment>
  );
}