import * as React from "react";
import { Route, Switch } from "react-router-dom";

const NoAuth = React.lazy(() => import("@/pages/Error/NoAuth"));
const Personal = React.lazy(() => import("@/pages/Personal"));
const Manage = React.lazy(() => import("@/pages/Manage"));
const Center = React.lazy(() => import("@/pages/DashBoard/Center"));
const Article = React.lazy(() => import("@/pages/article"));
const Editor = React.lazy(() => import("@/pages/Editor"));
const Logistics = React.lazy(() => import("@/pages/Logistics"));
const NoMatch = React.lazy(() => import("@/pages/Error/NoMatch"));

const Router = () => {
  return (
    <Switch>
      <Route name="Center" path="/center/:userId/:authority" component={Center} />
      <Route name="Articles" path="/article/:articleId" component={Article} />
      <Route name="Editor" path="/editor/:userId" component={Editor} />
      <Route name="Logistics" path="/logistics" component={Logistics} />
      <Route name="Manage" path="/manage/:userId/:authority/:departmentId" component={Manage} />
      <Route name="Personal" path="/personal/:userId" component={Personal} />
      <Route name="NoAuth" path="/noauth" component={NoAuth} />
      <Route name="NoMatch" path="*" component={NoMatch} />
    </Switch>
  );
};

export default Router;