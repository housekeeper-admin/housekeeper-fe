import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const NoAuth = React.lazy(() => import('@/pages/error-page/no-auth'));
const Attendance = React.lazy(() => import('@/pages/manage/attendance'));
const AskLeave = React.lazy(() => import('@/pages/manage/askleave'));
const Resign = React.lazy(() => import('@/pages/manage/resign'));
const AddUser = React.lazy(() => import('@/pages/manage/register-user'));
const Logistics = React.lazy(() => import('@/pages/manage/logistics'));
const AddWage = React.lazy(() => import('@/pages/manage/add-wage'));
const NoMatch = React.lazy(() => import('@/pages/error-page/no-match'));

const Router = () => {
  return (
    <Switch>
      <Route
        name="Attendance"
        path="/manage/:userId/:authority/:departmentId/attendance"
        component={Attendance}
      />
      <Route
        name="AskLeave"
        path="/manage/:userId/:authority/:departmentId/askleave"
        component={AskLeave}
      />
      <Route
        name="Resign"
        path="/manage/:userId/:authority/:departmentId/resign"
        component={Resign}
      />
      <Route
        name="AddUser"
        path="/manage/:userId/:authority/:departmentId/adduser"
        component={AddUser}
      />
      <Route
        name="Logistics"
        path="/manage/:userId/:authority/:departmentId/logistics"
        component={Logistics}
      />
      <Route
        name="NoAuth"
        path="/manage/:userId/:authority/:departmentId/addwage"
        component={AddWage}
      />
      <Route name="NoAuth" path="/noauth" component={NoAuth} />
      <Route name="NoMatch" path="*" component={NoMatch} />
    </Switch>
  );
};

export default Router;
