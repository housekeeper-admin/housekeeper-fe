import * as React from "react";
import { Route, Switch } from "react-router-dom";

const NoAuth = React.lazy(() => import("@/pages/Error/NoAuth"));
const Attendance = React.lazy(() => import("@/pages/Personal/Attendance"));
const AskLeave = React.lazy(() => import("@/pages/Personal/AskLeave"));
const Resign = React.lazy(() => import("@/pages/Personal/Resign"));
const Wage = React.lazy(() => import("@/pages/Personal/Wage"));
const Entry = React.lazy(() => import("@/pages/Personal/Entry"));
const UpdateUserInfo = React.lazy(() => import("@/pages/Personal/Update"));
const NoMatch = React.lazy(() => import("@/pages/Error/NoMatch"));

const Router = () => {
  return (
    <Switch>
      <Route name="Attendance" path="/personal/:userId/:departmentId/attendance" component={Attendance} />
      <Route name="AskLeave" path="/personal/:userId/:departmentId/askleave" component={AskLeave} />
      <Route name="Resign" path="/personal/:userId/:departmentId/resign" component={Resign} />
      <Route name="Entry" path="/personal/:userId/:departmentId/entry" component={Entry} />
      <Route name="UpdateUserInfo" path="/personal/:userId/update" component={UpdateUserInfo} />
      <Route name="Wage" path="/personal/:userId/wage" component={Wage} />
      <Route name="NoAuth" path="/noauth" component={NoAuth} />
      <Route name="NoMatch" path="*" component={NoMatch} />
    </Switch>
  );
};

export default Router;