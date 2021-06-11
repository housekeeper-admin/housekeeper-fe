import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import STG from '@/storage';

const NoAuth = React.lazy(() => import('@/pages/error-page/no-auth'));
const Personal = React.lazy(() => import('@/pages/personal'));
const Manage = React.lazy(() => import('@/pages/manage'));
const Center = React.lazy(() => import('@/pages/dash-board/center'));
const Article = React.lazy(() => import('@/pages/article'));
const Editor = React.lazy(() => import('@/pages/editor'));
const Logistics = React.lazy(() => import('@/pages/logistics'));
const NoMatch = React.lazy(() => import('@/pages/error-page/no-match'));

const Router = () => {
  const token = STG.storage.get({ key: STG.STORAGE_KEY_MAP.TOKEN }) || null;
  return (
    <Switch>
      {!token && <Redirect to="/login" />}
      <Route name="Center" path="/center/:userId/:authority" component={Center} />
      <Route name="Articles" path="/article/:articleId" component={Article} />
      <Route name="Editor" path="/editor/:userId" component={Editor} />
      {/* <Route name="Logistics" path="/logistics" component={Logistics} /> */}
      <Route name="Manage" path="/manage/:userId/:authority/:departmentId" component={Manage} />
      <Route name="Personal" path="/personal/:userId" component={Personal} />
      <Route name="NoAuth" path="/noauth" component={NoAuth} />
      <Route name="NoMatch" path="*" component={NoMatch} />
    </Switch>
  );
};

export default Router;
