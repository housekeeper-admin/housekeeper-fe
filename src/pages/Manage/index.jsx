import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import { ManageRoutes } from "../../routers/config";
import { RouteWithSubRoutes } from "../../routers/index";
export default function Manage() {
  return (
    <Fragment>
      <Switch>
        {
          ManageRoutes.map((route, i) =>
            (<RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>)
          )
        }
      </Switch>
    </Fragment>
  );
}