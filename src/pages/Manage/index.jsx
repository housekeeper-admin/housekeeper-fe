import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import { ManageRoutes } from "../../routers/config";
import { RouteWithSubRoutes } from "../../routers/index";
import { Redirect_TO_Auth } from "../../middleware/Redirect";
export default function Manage() {
  return (
    <Fragment>
      <Switch>
        {
          Redirect_TO_Auth()
        }
        {
          ManageRoutes.map((route, i) =>
            (<RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>)
          )
        }
      </Switch>
    </Fragment>
  );
}