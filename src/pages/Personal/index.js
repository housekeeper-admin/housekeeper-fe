import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import { PersonalRoutes } from "../../routers/config";
import { RouteWithSubRoutes } from "../../routers/index";
export default function Personal() {
  return (
    <Fragment>
      <Switch>
        {
          PersonalRoutes.map((route, i) =>
            (<RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>)
          )
        }
      </Switch>
    </Fragment>
  );
}