import * as React from 'react';
import STG from '@/storage';
import Router from './router';
import GlobalContext, { defaultContext } from './context';
import './App.less';

function App() {
  const storageUserInfo = STG.storage.get({
    key: STG.STORAGE_KEY_MAP.USER_INFO,
  });
  const [userInfo, updateUserInfo] = React.useState(storageUserInfo || defaultContext);

  return (
    <GlobalContext.Provider
      value={{
        userInfo: { ...userInfo },
        updateUserInfo,
      }}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
