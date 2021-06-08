import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const NoAuth = React.lazy(() => import('@/pages/error-page/no-auth'));
const Attendance = React.lazy(() => import('@/pages/personal/attendance'));
const AskLeave = React.lazy(() => import('@/pages/personal/askleave'));
const Resign = React.lazy(() => import('@/pages/personal/resign'));
const Wage = React.lazy(() => import('@/pages/personal/Wage'));
const Entry = React.lazy(() => import('@/pages/personal/entry'));
const UpdateUserInfo = React.lazy(() => import('@/pages/personal/update-info'));
const NoMatch = React.lazy(() => import('@/pages/error-page/no-match'));

const Router = () => {
  return (
    <Switch>
      <Route
        name="Attendance"
        path="/personal/:userId/:departmentId/attendance"
        component={Attendance}
      />
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
