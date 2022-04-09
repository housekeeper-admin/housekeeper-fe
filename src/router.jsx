import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import DashBoard from '@/pages/dash-board';
import { LoadingOutlined } from '@ant-design/icons';
const Login = React.lazy(() => import('@/pages/login'));
const NoMatch = React.lazy(() => import('@/pages/error-page/no-match'));

export const SpinIcon = () => (
  <Spin
    className="transform-center"
    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
  />
);
const Router = () => {
  return (
    <Suspense fallback={<SpinIcon />}>
      <BrowserRouter>
        <Switch>
          <Route name="Login" path="/login" component={Login} />
          <Route name="DashBoard" path="/" component={DashBoard} />
          <Route name="NoMatch" path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
