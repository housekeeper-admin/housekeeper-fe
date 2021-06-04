import * as React from "react";
/* 引入路由 */
import Router from "./router";
import GlobalContext, { defaultContext } from './context';
import "./App.less";
function App() {
  const [userInfo, updateUserInfo] = React.useState(defaultContext);

  return (
    <GlobalContext.Provider
      value={{
        ...userInfo,
        updateUserInfo
      }}
    >
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
